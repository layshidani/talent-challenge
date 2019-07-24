import React from 'react';
import firebase from '../FirebaseWrapper';
import Input from '../components/Input';
import AlertDismissible from '../components/AlertDismissible';
import validateMail from '../utils/emailValidation';
import validatePhone from '../utils/phoneValidation';
import v4 from 'uuid/v4';
import { Row, Col, Button } from 'react-bootstrap';

class CustomerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      alert: null,
      errors: {}
    };
  }

  handleChange(event, element) {
    const newState = this.state;
    newState[element] = event.target.value;
    this.setState(newState);
  }

  validateData = () => {
    const { name, email, phone } = this.state;
    let errors = {};

    let nameIsValid = true;
    let emailIsValid = true;
    let phoneIsValid = true;

    if (!name) {
      nameIsValid = false;
      errors['name'] = 'O campo nome é obrigatório';
    }

    if (!validateMail(email)) {
      emailIsValid = false;
      errors['email'] = 'O campo email é obrigatório';
    }

    if (!validatePhone(phone)) {
      phoneIsValid = false;
      errors['phone'] = 'O campo telefone é obrigatório';
    }

    const valid = nameIsValid && emailIsValid && phoneIsValid;
    this.setState({ errors });

    const cpfStoraged = sessionStorage.getItem('cpf');

    if (valid) {
      try {
        firebase.firestore.createProspect(name, email, phone, cpfStoraged, v4());
        this.props.history.push('confirmation.js');
      } catch (error) { 
        this.toast('danger', 'Erro ao criar o cadastro');
      }
    }
  }

  toast(variant, text) {
    this.setState({ alert: { variant, text } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }

  render() {
    return (
      <section>
        <Row>
          <Col sm='12' md='12' lg='12'>
            {this.state.alert && <AlertDismissible variant={this.state.alert.variant} text={this.state.alert.text}></AlertDismissible>}
          </Col>
        </Row>
        <h2>Seu CPF é: {sessionStorage.getItem('cpf')}</h2>
        <h3>Vamos iniciar seu cadastro!</h3>
        <form>
          {this.state.errors.name && <p>{this.state.errors.name}</p>}
          <Input type='text' text='Nome completo' onChange={(event) => this.handleChange(event, 'name')} />
          {this.state.errors.email && <p>{this.state.errors.email}</p>}
          <Input type='email' text='exemplo@exemplo.com' onChange={(event) => this.handleChange(event, 'email')} />
          {this.state.errors.phone && <p>{this.state.errors.phone}</p>}
          <Input type='text' text='(xx) xxxxxxxx' onChange={(event) => this.handleChange(event, 'phone')} />
          <Button onClick={this.validateData}>Cadastrar</Button>
        </form>
      </section>
    );
  }
}

export default CustomerData;

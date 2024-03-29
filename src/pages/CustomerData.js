import React from 'react';
import firebase from '../FirebaseWrapper';
import Input from '../components/Input';
import Button from '../components/Button';
import AlertDismissible from '../components/AlertDismissible';
import validateMail from '../utils/emailValidation';
import validatePhone from '../utils/phoneValidation';
import v4 from 'uuid/v4';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

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
    const cpf = sessionStorage.getItem('cpf');  
    let errors = {};

    let nameIsValid = true;
    let emailIsValid = true;
    let phoneIsValid = true;

    if (!name) {
      nameIsValid = false;
      errors['name'] = 'Preencha o nome corretamente';
    }

    if (!validateMail(email)) {
      emailIsValid = false;
      errors['email'] = 'Preencha o e-mail corretamente';
    }

    if (!validatePhone(phone)) {
      phoneIsValid = false;
      errors['phone'] = 'Preencha o campo corretamente';
    }

    const valid = nameIsValid && emailIsValid && phoneIsValid;
    this.setState({ errors });

    if (valid) {
      try {
        firebase.firestore.createProspect(cpf, name, email, phone, v4());
        sessionStorage.clear();
        this.props.history.push('confirmation');
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
        <h2>Vamos iniciar seu cadastro!</h2>
        <p>Seu CPF é: {sessionStorage.getItem('cpf')}</p>
        <form>
          {this.state.errors.name && <p className='error'>{this.state.errors.name}</p>}
          <Input type='text' text='Nome completo' onChange={(event) => this.handleChange(event, 'name')} />
          {this.state.errors.email && <p className='error'>{this.state.errors.email}</p>}
          <Input type='email' text='exemplo@exemplo.com' onChange={(event) => this.handleChange(event, 'email')} />
          {this.state.errors.phone && <p className='error'>{this.state.errors.phone}</p>}
          <Input type='text' text='(xx) xxxxxxxx' onChange={(event) => this.handleChange(event, 'phone')} />
          <Button onClick={this.validateData} text='Cadastrar'></Button>
        </form>
      </section>
    );
  }
}

export default CustomerData;

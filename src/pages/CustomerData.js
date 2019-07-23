import React from 'react';
import firebase from '../FirebaseWrapper';
import Input from '../components/Input'
import Button from '../components/Button'
import validateMail from '../utils/emailValidation';
import validatePhone from '../utils/phoneValidation';


class CustomerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      errorName: '',
      errorEmail: '',
      errorPhone: ''
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  validateData = () => {
    const { name, email, phone, errorName, errorEmail, errorPhone } = this.state;
    console.log(email, phone)

    if (name === '') {
      this.setState({ errorName: 'Name inválido' });
    } else {
      this.setState({ errorName: '' });
    }

    if (!validateMail(email)) {
      this.setState({ errorEmail: 'Email inválido' });
    } else {
      this.setState({ errorEmail: '' });
    }

    if (!validatePhone(phone)) {
      this.setState({ errorPhone: 'Telefone inválido' });
    } else {
      this.setState({ errorPhone: '' });
    }

    // if (errorName === '' && errorEmail === '' && errorPhone === '') {

    //   firebase.firestore.createUser(name, email, phone)
    //   alert('Usuário enviado!')
    // }
  }

  render() {
    return (
      <section>
        <h2>Seu CPF é: {sessionStorage.getItem('cpf')}</h2>
        <h3>Vamos iniciar seu cadastro!</h3>
        <form>
          <p>{this.state.errorName}</p>
          <Input type='text' text='Nome completo' onChange={(e) => this.handleChange(e, 'name')}></Input>
          <p>{this.state.errorEmail}</p>
          <Input type='email' text='exemplo@exemplo.com' value={this.state.email}
            onChange={(e) => this.handleChange(e, 'email')}></Input>
          <p>{this.state.errorPhone}</p>
          <Input type='number' text='(xx) xxxxxxxx' value={this.state.phone}
            onChange={(e) => this.handleChange(e, 'phone')}></Input>
          <Button onClick={this.validateData} >Cadastrar</Button>
        </form>
      </section>
    )
  }
}

export default CustomerData;

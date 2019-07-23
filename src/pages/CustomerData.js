import React from 'react';
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
      phone: ''
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  // checkMail = (mail) => { var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/); 
  // if (typeof (mail) == "string") { if (er.test(mail)) { return true; } } else if (typeof (mail) == "object") 
  // { if (er.test(mail.value)) { return true; } } else { return false; } }
  
  
  // const checkPhone = (phone) => { }

  validateData = () => {
    const{email, phone} = this.state;
    console.log(email, phone)
    if( validatePhone(phone) ){
      alert('aprovado')
    } else {
      alert('náo aprovadooo')
    }
  }

render() {
  return (
    <section>
      <h2>Seu CPF é: {sessionStorage.getItem('cpf')}</h2>
      <h3>Vamos iniciar seu cadastro!</h3>
      <form>
        <Input type='text' text='Nome completo'></Input>
        <Input type='email' text='exemplo@exemplo.com' value={this.state.email}
        onChange={(e) => this.handleChange(e, 'email')}></Input>
        <Input type='number' text='(xx) xxxxxxxx' value={this.state.phone}
        onChange={(e) => this.handleChange(e, 'phone')}></Input>
        <Button  onClick={this.validateData} >Cadastrar</Button>
      </form>
    </section>
  )
}
}

export default CustomerData;

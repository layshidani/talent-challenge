import React from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import '../App.css';

const isValid = require('gtech-cpf-validator');

class CPFValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      errorMsg: ''
    };
  }
  
  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  validateCpf = (cpfString) => {
    const valid = { 
      cpf1 : isValid.cpfValidator(cpfString)
    } 
    if(valid.cpf1) {
      sessionStorage.setItem('cpf', cpfString);
      this.setState({errorMsg: ''})
      this.props.history.push(`/customer-data`)
    } else {
      this.setState({errorMsg: 'CPF inválido'})
    }    
  }
  
  render() {
    return (
      <div class="color-form">
      <section>
        <img ClassName="logo" src='../images/logo.png' />
        <p className='error'>{this.state.errorMsg}</p>
        <Input value={this.state.cpf}
          text='Digite o número do seu CPF'
          onChange={(e) => this.handleChange(e, 'cpf')} />
        <Button text='Verificar' className="btn" onClick={() => this.validateCpf(this.state.cpf)} />
      </section>
      </div>
    )
  }
}

export default CPFValidation;

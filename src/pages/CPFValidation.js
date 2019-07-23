import React from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
// import '.css'

const isValid = require('gtech-cpf-validator');

class CPFValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: ''
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
    } else {
      alert('CPF inválido')
    }    
  }
  
  render() {
  const cpfStored = sessionStorage.getItem('cpf');
    console.log(cpfStored)
    return (
      <section>
        <Input value={this.state.cpf}
          placeholder='Digite o número do seu CPF'
          onChange={(e) => this.handleChange(e, 'cpf')} />
        <Button text='Verificar' className="btn" onClick={() => this.validateCpf(this.state.cpf)} />
      </section>
    )
  }
}

export default CPFValidation;

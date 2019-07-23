import React from 'react';
// import Input from '../components/Input'
// import Button from '../components/Button'
// import '.css'

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

  render() {
    return (
      <section>
        <input value={this.state.cpf}
          placeholder='Digite o número do seu CPF'
          onChange={(e) => this.handleChange(e, 'cpf')} />
        {/* <Button text='Verificar' className="btn" onClick={this.validateCpf} /> */}
      </section>
    )
  }
}

export default CPFValidation;

import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firebase from '../FirebaseWrapper';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value;
    this.setState(newState);
  }

  signIn = async (e) => {
    e.preventDefault();
    await firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    sessionStorage['userID'] = firebase.auth.getCurrentUserID();
    this.props.history.push(`/admin-dashboard`);
  }

  render() {
    return (
      <Row className='mx-0'>
        <Col md='12' lg='12'>
          <div className='mx-5'>
            <Input text='E-mail' value={this.state.email} onChange={(event) => this.handleChange(event, 'email')} />
            <Input text='Senha' type='password' value={this.state.password} onChange={(event) => this.handleChange(event, 'password')} />
          </div>
          <div className='text-center my-5'>
            <Button text='entrar' onClick={this.signIn} />
          </div>
        </Col>
      </Row>
    )
  }
}

export default Login;
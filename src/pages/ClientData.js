import React, { Component } from 'react';
import '../pages/Login.css';
import ButtonLogin from '../components/ButtonLogin'
import '../components/Form.css';
import firebase from '../firebase-config';
// import withFirebaseAuth from 'react-with-firebase-auth';
import { Link } from 'react-router-dom';


const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      displayName: '',
      errorMsg: ''
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState({ newState });
  }


  signIn = () => {
    const { email, password } = this.state;
    this.props.signInWithEmailAndPassword(email, password)
      .then((resp) => {
        const id = resp.user.uid;
        database.collection('users').doc(id).get()
          .then((resp) => {
            this.props.history.push(`/${resp.data().userType}`);
          })
      }).catch((error) => {
        this.setState({ errorMsg: error.message });
      })
  }

  render() {
    return (
      <section className='home'>
        <div className='form'>
          <h2>Abra sua conta</h2>
          <p>{this.state.errorMsg}</p>
          <input value={this.state.email} type='email'
            placeholder='Nome Completo'
            onChange={(e) => this.handleChange(e, 'email')} />
          <input value={this.state.email} type='email'
            placeholder='Email'
            onChange={(e) => this.handleChange(e, 'email')} />
          <input value={this.state.email} type='email'
            placeholder='Telefone'
            onChange={(e) => this.handleChange(e, 'email')} />
          <input value={this.state.password} type='password'
            placeholder='CPF'
            onChange={(e) => this.handleChange(e, 'password')} />
          <ButtonLogin text='Entrar' className='btn' onClick={this.signIn} />
          <Link className='link' to='/signUp'>Fazer Login</Link>
        </div>
      </section>
    )
  }
}


export default Home;
// export default withFirebaseAuth({
//   firebaseAppAuth,
// })(Home);

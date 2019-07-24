
import React from 'react';
import '../pages/Confirmation.css';
import '../pages/Login.css';
import '../components/Form.css';
import firebase from '../firebase-config';
// import withFirebaseAuth from 'react-with-firebase-auth';
import { Link } from 'react-router-dom';


const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <section className='home'>

        <div className='form'>
      <img className="img" src={require('../images/Logo_Transp.png')} />
<h1>Seu cadastro foi enviado com sucesso!</h1>
       <p>Por gentileza, aguarde nosso contato com a confirmação da abertura de sua conta.</p>
        </div>
      </section>
    )
  }
}
export default Confirm;
// export default withFirebaseAuth({
//   firebaseAppAuth,
// })(Home);

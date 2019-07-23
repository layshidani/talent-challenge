import firebase from '../firebase-config';

class FirebaseAuthWrapper {
  constructor() {
    this.auth = firebase.auth();
  }

  getCurrentUserID() {
    return this.auth.currentUser.uid;
  }

  async signInWithEmailAndPassword(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  };

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        sessionStorage.clear();
        window.location = '/';
      }, function(error) {
        console.error(error);
      });
  }
}

class FirebaseFirestoreWrapper {
  constructor() {
    this.firestore = firebase.firestore();
  }

  async createCustomer(obj, id) {
    await this.firestore.doc(`customer/${id}`).set({
      name: name,
      email: email,
      phone: phone,
      cpf: cpf,
      status: status,
      photoURL: '../images/avatar.png',
      createdAt: new Date()
    });
  }

}
class FirebaseWrapper {
  constructor() {
    this.auth = new FirebaseAuthWrapper();
    this.firestore = new FirebaseFirestoreWrapper();
  }
}

export default new FirebaseWrapper();
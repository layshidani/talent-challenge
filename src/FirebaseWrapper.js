import firebase from './firebase-config';

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
      .then(function () {
        sessionStorage.clear();
        window.location = '/admin-dashboard';
      }, function (error) {
        console.error(error);
      });
  }
}

class FirebaseFirestoreWrapper {
  constructor() {
    this.firestore = firebase.firestore()
  }

  // async createUser(name, email, phone) {
  //   return await this.firestore.doc(`customers`).set({
  //     name,
  //     email, 
  //     phone
  //   });
  // }

  async createUser(name, email, phone) {
    await this.firestore.doc(`customers`).set({
      name,
      email,
      phone
    });
  }

  // async createUser(userID, role, email, name) {
  //   return await this.firestore.doc(`users/${userID}`).set({
  //     email: email,
  //     displayName: name,
  //     photoURL: '../images/avatar.png',
  //     createdAt: new Date(),
  //     role: role
  //   });
  // }

  // async getUserById(id) {
  //   const doc = await this.firestore.collection('users').doc(id).get();
  //   const user = doc.data();
  //   user['id'] = id;
  //   return user;
  // }
}

class FirebaseWrapper {
  constructor() {
    this.auth = new FirebaseAuthWrapper();
    this.firestore = new FirebaseFirestoreWrapper();
  }
}

export default new FirebaseWrapper();

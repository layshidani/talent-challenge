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
  
  async createProspect(name, email, phone, id) {
    await this.firestore.doc(`prospect/${id}`).set({
      name: name,
      email: email,
      phone: phone
    });
  }

  async getProspectById(id) {
    const doc = await this.firestore.collection('prospect').doc(id).get();
    const prospect = doc.data();
    prospect['id'] = id;
    return prospect;
  }
}

class FirebaseWrapper {
  constructor() {
    this.auth = new FirebaseAuthWrapper();
    this.firestore = new FirebaseFirestoreWrapper();
  }
}

export default new FirebaseWrapper();

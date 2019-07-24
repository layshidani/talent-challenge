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
  
  async createProspect(cpf, name, email, phone, id) {
    await this.firestore.doc(`prospect/${id}`).set({
      cpf:cpf,
      name: name,
      email: email,
      phone: phone,
      status: 'pendente'
    });
  }

  async getProspectById(id) {
    const doc = await this.firestore.collection('prospect').doc(id).get();
    const prospect = doc.data();
    prospect['id'] = id;
    return prospect;
  }

  async getProspectByStatus(status) {
    const dbProspect = await this.firestore.collection('prospect').where('status', '==', status).get();
    const prospects = [];
    dbProspect.forEach((child) =>{
      let prospect = child.data();
      prospect['id'] = child.id;
      prospects.push(prospect);
    });
    return prospects;
  }
}

class FirebaseWrapper {
  constructor() {
    this.auth = new FirebaseAuthWrapper();
    this.firestore = new FirebaseFirestoreWrapper();
  }
}

export default new FirebaseWrapper();

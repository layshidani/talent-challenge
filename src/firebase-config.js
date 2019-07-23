import firebase from "firebase";
​
const firebaseConfig = {
  apiKey: "AIzaSyBWtjIK1YU2pZZFXnbfKdvdlPExeglHgNM",
  authDomain: "talent-db-7fa1c.firebaseapp.com",
  databaseURL: "https://talent-db-7fa1c.firebaseio.com",
  projectId: "talent-db-7fa1c",
  storageBucket: "talent-db-7fa1c.appspot.com",
  messagingSenderId: "902712211276",
  appId: "1:902712211276:web:5ba602bafb1b8536"
};
​
firebase.initializeApp(firebaseConfig);
export default firebase;
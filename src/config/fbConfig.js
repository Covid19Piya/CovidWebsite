import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAUmH-yd5LssE_HL4b-1MVZsyrQKkSOrM0",
  authDomain: "covid19-5c7ef.firebaseapp.com",
  projectId: "covid19-5c7ef",
  storageBucket: "covid19-5c7ef.appspot.com",
  messagingSenderId: "620694520767",
  appId: "1:620694520767:web:b212c6999b1a3aa36f970a",
  measurementId: "G-5NGB7GMRVQ"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
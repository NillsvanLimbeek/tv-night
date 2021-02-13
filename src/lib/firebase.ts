import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCP9Hs-5M8jix3JBYefoe0g9wW3JtdafZc',
    authDomain: 'tv-night.firebaseapp.com',
    projectId: 'tv-night',
    storageBucket: 'tv-night.appspot.com',
    messagingSenderId: '607546586997',
    appId: '1:607546586997:web:c4e118705fd54b7a85853c',
    measurementId: 'G-C4Q0WKBLH0',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

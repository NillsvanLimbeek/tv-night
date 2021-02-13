import firebase from '../../../node_modules/firebase';

export interface User {
    id: string;
    displayName: string;
    createdAt: firebase.firestore.Timestamp;
    email: string;
    photoUrl: string;
}

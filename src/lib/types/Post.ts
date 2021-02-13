import firebase from '../../../node_modules/firebase';

export interface Post {
    id: string;
    title: string;
    stars: number;
    createdAt: firebase.firestore.Timestamp;
}

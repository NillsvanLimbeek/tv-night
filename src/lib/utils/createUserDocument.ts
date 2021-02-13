import { User } from '../types/User';
import firebase from 'firebase';

import { firestore } from '../firebase';
import { addIdsToDoc } from '.';

export async function createUserDocument(user: firebase.User, additionalData: any) {
    // get a ref to the user that may or may no exist
    const userRef = firestore.doc(`users/${user.uid}`);

    // get the user from that location
    const snapshot = await userRef.get();

    // create a user if there isn't one
    if (!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.error(error);
        }
    }

    return getUserDocument(user.uid);
}

export async function getUserDocument(uid: string) {
    if (!uid) return null;

    try {
        const userDoc = await firestore.doc(`users/${uid}`);
        const user = await addIdsToDoc<User>(userDoc);

        return user;
    } catch (error) {
        console.error(error);
    }
}

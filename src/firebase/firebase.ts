import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createDocument(collectionName: string, docKey: string, docFields: object) {
  try {
    const userCollectionRef = doc(db, collectionName, docKey);
    await setDoc(userCollectionRef, docFields);

    return true;

  } catch (error) {
    return false;
  }
}

async function getDocument(collectionName: string, docKey: string,) {
  try {
    const userDocRef = doc(db, collectionName, docKey);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data()
    }
  } catch (error: any) { }

  return false;
}


export const firebase = {
  createDocument,
  getDocument,
}
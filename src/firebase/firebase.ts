import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

console.log(firebaseConfig);


const firebaseConfig2 = {
  apiKey: "AIzaSyAQMN9SPW04-bGD29yTFqbXQG-MAVkeAIo",
  authDomain: "web-apps-production-ad82f.firebaseapp.com",
  projectId: "web-apps-production-ad82f",
  storageBucket: "web-apps-production-ad82f.appspot.com",
  messagingSenderId: "350181233394",
  appId: "1:350181233394:web:f7f361543cb50aab05b66b"
};

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
import {
  getFirestore,
  setDoc, doc, getDoc, getDocs,
  collection
} from 'firebase/firestore';
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

async function getDocument(collectionName: string, docKey: string) {
  try {
    const userDocRef = doc(db, collectionName, docKey);
    const docSnap = await getDoc(userDocRef);
  
    if (docSnap.exists()) {
      return docSnap.data()
    }
  } catch (error: any) { }

  throw Error("Document not found");
}

async function getDocuments(collectionName: string) {
  try {
    const response = await getDocs(collection(db, collectionName));
    const documents = [] as Array<object>;

    response.forEach(docRef => {
      documents.push(docRef.data());
    });

    return documents;
  } catch (error: any) {
    throw error;
  }
}

async function hasDocument(collectionName: string, docKey: string) {
  try {
    await getDocument(collectionName, docKey);
    return true;
  } catch {
    return false;
  }
}


export const firebase = {
  createDocument,
  hasDocument,
  getDocument,
  getDocuments,
}
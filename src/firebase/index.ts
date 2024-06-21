import {
  getFirestore,
  setDoc, doc, getDoc, getDocs,
  collection
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { utils } from '../utils/utils';
import {
  DocumentAlreadyExistsError,
  DocumentNotFoundError,
  DatabaseConfigurationError
} from '../exceptions/appError';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function checkConnection() {
  if (utils.hasEmptyFields(firebaseConfig)) {
    throw new DatabaseConfigurationError();
  }
}

async function createDocument(collectionName: string, docKey: string, docFields: object) {
  checkConnection();

  try {
    const userCollectionRef = doc(db, collectionName, docKey);
    await setDoc(userCollectionRef, docFields);

    return true;

  } catch (error) {
    throw new DocumentAlreadyExistsError();
  }
}

async function getDocument(collectionName: string, docKey: string) {
  checkConnection();

  const userDocRef = doc(db, collectionName, docKey);
  const docSnap = await getDoc(userDocRef);

  if (!docSnap.exists()) {
    throw new DocumentNotFoundError();
  }

  return docSnap.data()
}

async function getDocuments(collectionName: string) {
  checkConnection();

  try {
    const response = await getDocs(collection(db, collectionName));
    const documents = [] as Array<object>;

    response.forEach(docRef => {
      documents.push(docRef.data());
    });

    return documents;
  } catch (error: any) {
    console.error(error);
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
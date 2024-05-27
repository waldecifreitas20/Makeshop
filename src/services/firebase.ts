import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAQMN9SPW04-bGD29yTFqbXQG-MAVkeAIo",
  authDomain: "web-apps-production-ad82f.firebaseapp.com",
  projectId: "web-apps-production-ad82f",
  storageBucket: "web-apps-production-ad82f.appspot.com",
  messagingSenderId: "350181233394",
  appId: "1:350181233394:web:f7f361543cb50aab05b66b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const dataServices = {

  createUser: async (user: User): Promise<boolean> => {
    try {
      const userCollectionRef = collection(db, "users");
      await addDoc(userCollectionRef, user);
      return true;
    } catch (error) {
      alert('deu merda aqui')
      return false;
    }
  },
}
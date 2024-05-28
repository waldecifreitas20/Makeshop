import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
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

async function createUser(user: User): Promise<boolean> {
  try {
    const userCollectionRef = doc(db, "users", user.email);
    await setDoc(userCollectionRef, user);
    alert("Usuário cadastrado com sucesso");
    return true;
  } catch (error) {
    alert('deu merda aqui')
    console.error(error);
    return false;
  }
}

async function getUser(email: string) {
  try {
    const userDocRef = doc(db, "users", email);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return {
        status: 200,
        msg: 'ok',
        user: docSnap.data()
      };
    }

    return {
      status : 404,
      msg: "User not found",
    }
  } catch (error: any) {
    return {
      status: 406,
      msg: "Unallowed to access this method",
    }
  }
}

async function checkCredentials(email: string, password: string) {

}


export const dataServices = {
  createUser, getUser

}
import { firebase } from "../firebase";
import { storageServices } from "./storage.services";

async function authenticate(email: string, password: string) {
  try {
    const user = await firebase.getDocument("users", email);
    if (user.email === email && user.password === password) {
      storageServices.setItem("user", {
        token: Math.random(),
        email: user.email,
      });
      return true;
    }
  } catch (error: any) { }

  throw Error("Email e/ou Senha inválidos");
}

async function signUp(user: User) {
  const hasUser = await firebase.hasDocument("users", user.email);
  if (hasUser) {
    throw Error("Usuário já Existe");
  }
  await firebase.createDocument("users", user.email, user);
  return;
}

async function hasAuthenticated() {
  try {
    const user = storageServices.getItem("user");
    console.log(user);
    
    return await firebase.hasDocument("users", user.email);
  } catch (error) {
    console.log(error);
    return false;
  }
}

function logout() {
  storageServices.clear();
  window.location.href = "/";
}

export const userServices = {
  authenticate,
  signUp,
  logout,
  hasAuthenticated,
}
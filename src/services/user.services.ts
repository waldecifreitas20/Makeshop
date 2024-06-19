import { firebase } from "../firebase";
import { storageServices } from "./storage.services";

async function authenticate(email: string, password: string) {
  try {
    const user = await firebase.getDocument("users", email);
    if (user.email === email && user.password === password) {
      storageServices.setItem("user", {
        token: Math.random(),
        userEmail: user.email,
      });
      return;
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
    await authenticate(user.email, user.password);
    return true; 
  } catch (error) {
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
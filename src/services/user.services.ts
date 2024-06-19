import { firebase } from "../firebase";
import users from "../mocks/users.json";
import { storageServices } from "./storage.services";

async function authenticate(email: string, password: string) {

  for (const user of users) {
    if (user.email === email && user.password === password) {

      storageServices.setItem("user", {
        token: Math.random(),
        userEmail: user.email,
      });
      return;
    }
  }

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

function hasAuthenticated() {
  try {
    storageServices.getItem("user");
    return true;
  } catch { }

  return false;
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
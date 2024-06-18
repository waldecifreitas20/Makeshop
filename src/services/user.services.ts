import { firebase } from "../firebase";
import users from "../mocks/users.json";

let isAuthenticated = false;

async function authenticate(email: string, password: string) {

  for (const user of users) {
    if (user.email === email && user.password === password) {
      isAuthenticated = true;
      return {
        token: Math.random().toString(),
        user,
      };
    }
  }

  throw Error("Email e/ou Senha inválidos");
}

async function hasAuthenticated() {
  return true;
}

async function signUp(user: User) {
  const hasUser = await firebase.hasDocument("users", user.email);
  if (hasUser) {
    throw Error("Usuário já Existe");
  }
  await firebase.createDocument("users", user.email, user);
  return
}

export const userServices = {
  authenticate,
  hasAuthenticated,
  signUp,
}
import { firebase } from "../firebase";
import users from "../mocks/users.json";

async function authenticate(email: string, password: string) {

  for (const user of users) {
    if (user.email === email && user.password === password) {
      return {
        token: Math.random().toString(),
        user,
      };
    }
  }

  throw Error("Email e/ou Senha inválidos");
}

async function signUp(user: User) {
  const hasUser = await firebase.hasDocument("users", user.email);
  if (hasUser) {
    throw Error("Usuário já Existe");
  }

  return await firebase.createDocument("users", user.email, user);
}

export const userServices = {
  authenticate,
  signUp,
}
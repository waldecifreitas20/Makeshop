import { firebase } from "../firebase";
import users from "../mocks/users.json";

async function authenticate(email: string, password: string) {

  for (const user of users) {
    if (user.email === email && user.password === password) {
      return {
        status: 200,
        message: "ok",
        toke: Math.random().toString(),
        user,
      };
    }
  }

  return {
    status: 404,
    message: "Email e/ou Senha inválidos",
  }
}


async function createUser(user: User) {
  const hasUser = await firebase.getDocument("users", user.email);
  if (hasUser) {
    throw Error("User already exists");
  }
  return await firebase.createDocument("users", user.email, user);
}

export const userServices = {
  authenticate,
  createUser,
}
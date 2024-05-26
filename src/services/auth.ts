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

export const authServices = {
  authenticate,
}
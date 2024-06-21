import { AppError, DatabaseConfigurationError, DocumentNotFoundError } from "../exceptions/appError";
import { firebase } from "../firebase";
import { storageServices } from "./storage.services";


function sendError(error: AppError) {
  if (error instanceof DocumentNotFoundError) {
    throw Error("Email e/ou Senha inválidos");
  }

  if (error instanceof DatabaseConfigurationError) {
    throw new Error("Não foi é possível conectar aos servidores no momento. tente mais tarde");
  }
  if (error instanceof DatabaseConfigurationError) {
    throw new Error("Não foi é possível conectar aos servidores no momento. tente mais tarde");
  }
}

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
  } catch (error: any) {
    console.error(error);
    sendError(error);
  }

}

async function signUp(user: User) {
  const hasUser = await firebase.hasDocument("users", user.email);

  if (hasUser) {
    throw Error("Usuário já Existe");
  }
  try {
    await firebase.createDocument("users", user.email, user);
  } catch (error: any) {
    console.error(error);
    sendError(error);
    
  }
}

async function hasAuthenticated() {
  try {
    const user = storageServices.getItem("user");

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
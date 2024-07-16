import { AppError, DatabaseConfigurationError, DocumentNotFoundError } from "../exceptions/appError";
import { firebase } from "../firebase";
import { PageRouter } from "../routes/PageRouter";
import { routes } from "../routes/routes";
import { storageServices } from "./storage.services";


function sendError(error: AppError) {
  if (error instanceof DocumentNotFoundError) {
    throw Error("Email e/ou Senha inválidos");
  }

  if (error instanceof DatabaseConfigurationError) {
    throw new Error("Não foi é possível conectar aos servidores no momento. tente mais tarde");
  }

  throw new Error(error.message);
}

async function authenticate(email: string, password: string) {
  try {
    const user = await firebase.getDocument("users", email);

    if (user.email !== email || user.password !== password) {
      throw new DocumentNotFoundError();
    }
    storageServices.setItem("user", {
      token: Math.random(),
      email: user.email,
      name: user.name,
    });
    return true;


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
    console.error(error);
    return false;
  }
}

function logout() {
  storageServices.clear();
  PageRouter.goTo(routes.home);
}

function getCurrentUser() {
  return storageServices.getItem("user");
}

export const userServices = {
  authenticate,
  signUp,
  logout,
  hasAuthenticated,
  getCurrentUser,
}
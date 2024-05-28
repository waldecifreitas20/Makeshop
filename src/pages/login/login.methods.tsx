import { userServices } from "../../services/user";
import { isValidEmail, isValidPassword } from "../../utils/forms";

function validateLoginForm(
  event: MouseEvent,
  onInvalid: (
    message: string,
    invalidInput: HTMLInputElement
  ) => void
) {
  const email = document.getElementById("email-input") as HTMLInputElement;
  const password = document.getElementById("password-input") as HTMLInputElement;

  if (!isValidEmail(email.value)) {
    event.preventDefault();
    onInvalid("Digite um email válido", email);
    return false;
  }

  if (!isValidPassword(password.value)) {
    event.preventDefault();
    onInvalid("Senha precisa conter entre 8 e 16 caracteres", password);
    return false;
  }

  return true;
}

async function login() {
  const email = document.getElementById("email-input") as HTMLInputElement;
  const password = document.getElementById("password-input") as HTMLInputElement;

  const response = await userServices.authenticate(email.value, password.value);
  if (response.status == 404) {
    throw new Error(response.message);
  }
}


export const loginMethods = {
  validateLoginForm,
  login
}
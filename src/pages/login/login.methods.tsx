import { isValidEmail, isValidPassword } from "../../utils/forms";

const validateLoginForm = (
  event: MouseEvent,
  onInvalid: (message: string, invalidInput: HTMLInputElement) => void
) => {
  const email = document.getElementById("email-input") as HTMLInputElement;
  const password = document.getElementById("password-input") as HTMLInputElement;
  
  if (!isValidEmail(email.value)) {
    event.preventDefault();
    return onInvalid("Digite um email válido", email);
  }
  
  if (!isValidPassword(password.value)) {
    event.preventDefault();
    return onInvalid("Senha precisa conter entre 8 e 16 caracteres", password);
  }
}

export const loginMethods = {
  validateLoginForm,
}
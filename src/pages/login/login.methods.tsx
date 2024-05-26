import { isValidEmail, isValidPassword } from "../../utils/forms";

const validateForm = (
  event: MouseEvent,
  onInvalid: (event: MouseEvent, invalidInput: HTMLInputElement) => void
) => {
  const email = document.getElementById("email-input") as HTMLInputElement;
  const password = document.getElementById("password-input") as HTMLInputElement;
  
  if (!isValidEmail(email.value)) {
    return onInvalid(event, email);
  }

  if (!isValidPassword(password.value)) {
    return onInvalid(event, password);
  }
}

export const loginMethods = {
  validateForm,
}
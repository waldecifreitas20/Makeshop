import { isEmpty } from "../../utils/utils";


const validateForm = (
  event: MouseEvent,
  onInvalid: (event: MouseEvent, invalidInput: HTMLInputElement) => void
) => {
  const email = document.getElementById("email-input") as HTMLInputElement;
  const password = document.getElementById("password-input") as HTMLInputElement;

  if (isEmpty(email.value)) {
    onInvalid(event, email);
  }
  if (isEmpty(password.value)) {
    onInvalid(event, password);
  }
}

export const loginMethods = {
  validateForm,
}
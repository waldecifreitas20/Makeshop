import { userServices } from "../../services/user";
import { formUtils} from "../../utils/forms";


function validateLoginForm(
  onInvalid: (
    message: string,
    invalidInput: HTMLInputElement
  ) => void
) {

  const email = formUtils.getField('login-form', 'email');
  const password = formUtils.getField('login-form', 'password');

  if (!formUtils.isValidEmail(email.value)) {
    onInvalid("Digite um email válido", email);
    return false;
  }

  if (!formUtils.isValidPassword(password.value)) {
    onInvalid("Senha precisa conter entre 8 e 16 caracteres", password);
    return false;
  }

  return true;
}

async function login() {
  const email = formUtils.getField('login-form', 'email');
  const password = formUtils.getField('login-form', 'password');

  const response = await userServices.authenticate(email.value, password.value);
  if (response.status == 404) {
    throw new Error(response.message);
  }
}


export const loginMethods = {
  validateLoginForm,
  login
}
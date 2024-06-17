import { utils } from "./utils";

function setInvalidInput(input: HTMLInputElement) {
  input.value = "";
  input.focus();
}

function isValidEmail(email: string): boolean {
  if (!utils.isEmpty(email)) {
    const hasAtSign = email.indexOf("@") !== -1;
    const hasDot = email.indexOf('.') !== -1;

    return hasAtSign && hasDot && !utils.isEmpty(email);
  }
  return false;
}

function isValidPassword(pass: string, fullCheck: boolean = false): boolean {
  const symbols = "!@#$%&*()_-=+{[}];:.,/?|";
  const letters = "çabcdefghijklmnopqrstuvwxyz";

  if (pass.length >= 8 && pass.length <= 16) {
    return true;
  }

  if (fullCheck) {
    for (const symbol of symbols) {
      if (pass.indexOf(symbol) !== -1) {
        return true;
      }
    }
    for (const letter of letters) {
      if (pass.indexOf(letter) !== -1) {
        return true;
      }
    }
    for (let i = 0; i <= 9; i++) {
      if (pass.indexOf(`${i}`) !== -1) {
        return true;
      }
    }
  }
  return false;
}

function getField(formId: string, inputId: string) {
  return document.querySelector(`#${formId} #${inputId}`) as HTMLInputElement;
}



export const formUtils = {
  setInvalidInput,
  isValidEmail,
  isValidPassword,
  getField,
}
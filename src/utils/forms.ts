import { utils } from "./utils";

const letters = "çabcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%&*()_-=+{[}];:.,/?|";

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

function checkPassword(pass: string, fullCheck: boolean = false): boolean {
  if (pass.length < 8 || pass.length > 16) {
    throw Error("Senha deve possuir entre 8 e 16 caracteres");
  }

  const errorMessage = "Senha deve conter números, simbolos, letras maiúsculas e minúsculas";

  if (fullCheck) {
    if (!hasSymbols(pass)) throw new Error(errorMessage);
    if (!hasCapsLetter(pass)) throw new Error(errorMessage);
    if (!hasLowerCaseLetter(pass)) throw new Error(errorMessage);
    if (!hasNumbers(pass)) throw new Error(errorMessage);
  }

  return true;
}


function hasCapsLetter(str: string) {

  for (const letter of letters) {
    if (str.indexOf(letter.toUpperCase()) !== -1) {
      return true;
    }
  }
  return false;
}
function hasLowerCaseLetter(str: string) {

  for (const letter of letters) {
    if (str.indexOf(letter.toLowerCase()) !== -1) {
      return true;
    }
  }
  return false;
}

function hasSymbols(str: string) {
  for (const symbol of symbols) {
    if (str.indexOf(symbol) !== -1) {
      return true;
    }
  }
  return false;
}

function hasNumbers(str: string) {
  for (let i = 0; i <= 9; i++) {
    if (str.indexOf(`${i}`) !== -1) {
      return true;
    }
  }
  return false;
}


export const formUtils = {
  setInvalidInput,
  isValidEmail,
  checkPassword,
  hasNumbers,
  hasSymbols, 
  hasCapsLetter, 
  hasLowerCaseLetter, 
}
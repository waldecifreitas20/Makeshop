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

function isValidPassword(pass: string, fullCheck: boolean = false): boolean {
  if (pass.length < 8 || pass.length > 16) {
    return false;
  }

  if (fullCheck) {
    if (!hasSymbols(pass)) return false;
    if (!hasCapsLetter(pass)) return false;
    if (!hasLowerCaseLetter(pass)) return false;
    if (!hasNumbers(pass)) return false;
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
  isValidPassword,
  hasNumbers,
  hasSymbols, 
  hasCapsLetter, 
  hasLowerCaseLetter, 
}
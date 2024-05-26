import { isEmpty } from "./utils";

function setInvalidInput(input: HTMLInputElement) {
  input.style.outline = "none";
  input.style.border = "1px solid red";
  input.focus();
}

function isValidEmail(email: string): boolean {
  if (!isEmpty(email)) { 
    const hasAtSign = email.indexOf("@") !== -1; 
    const hasDot = email.indexOf('.') !== -1; 
    
    return hasAtSign && hasDot && !isEmpty(email);
  }
  return false;
}

function isValidPassword(pass: string): boolean {
  const symbols = "!@#$%&*()_-=+{[}];:.,/?|";
  const letters = "çabcdefghijklmnopqrstuvwxyz";
 
  if (pass.length < 8 || pass.length > 16) {
    return false
  }
  
  for (const symbol of symbols) {
    if(pass.indexOf(symbol) !== -1) {
      return true;
    }
  }
  for (const letter of letters) {
    if(pass.indexOf(letter) !== -1) {
      return true;
    }
  }
  for (let i = 0; i <= 9; i++) {
    if(pass.indexOf(`${i}`) !== -1) {
      return true;
    }
  }
  return false;
}

function isEmptyForm(formFields: Array<string>):boolean {
  return false;
}

export {
  setInvalidInput,
  isValidEmail,
  isValidPassword,
  isEmptyForm,
}
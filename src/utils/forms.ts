function setInvalidInput(input: HTMLInputElement) {
  input.style.outline = "none";
  input.style.border = "1px solid red";
  input.focus();
}

function isValidEmail(email: string): boolean {
  return false;
}

function isValidPassword(pass: string): boolean {
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
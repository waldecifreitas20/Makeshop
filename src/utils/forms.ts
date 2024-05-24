function setInvalidInput(input: HTMLInputElement) {
  input.style.outlineColor = "red";
  input.style.border = "2px solid red";
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
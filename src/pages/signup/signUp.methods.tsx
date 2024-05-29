import { userServices } from "../../services/user";
import { formUtils } from "../../utils/forms";
import { loginMethods } from "../login/login.methods";

interface UserForm {
	name: HTMLInputElement,
	address: HTMLInputElement,
	birth: HTMLInputElement,
	cep: HTMLInputElement,
	city: HTMLInputElement,
	cpf: HTMLInputElement,
	email: HTMLInputElement,
	password: HTMLInputElement,
	state: HTMLInputElement,
}

function validateForm(formFields: UserForm,
	onInvalid: (
		message: string,
		input: HTMLInputElement,
	) => void): boolean {

	const { result: hasEmptyFields, emptyInput } = formUtils.checkEmptyFields(formFields);

	if (hasEmptyFields) {
		onInvalid("Preencha todos os campos", emptyInput);
		return false;
	}

	if (!formUtils.isValidEmail(formFields.email.value)) {
		onInvalid("Digite um email válido", formFields.email);
		return false;
	}

	if (!formUtils.isValidPassword(formFields.password.value, true)) {
		onInvalid("Senha precisa conter entre 8 e 16 caracteres", formFields.password);
		return false;
	}

	return true;
}

async function signUp(formFields: UserForm) {
	const user: User = {
		name: formFields.name.value,
		address: formFields.address.value,
		birth: formFields.birth.value,
		cep: formFields.cep.value,
		city: formFields.city.value,
		cpf: formFields.cpf.value,
		email: formFields.email.value,
		password: formFields.password.value,
		state: formFields.state.value,
	}
	return await userServices.createUser(user);
}

export const signUpMethods = {
	signUp, validateForm,
}
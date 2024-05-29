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

async function singUp() {
	const user: User = {
		name: 'junior',
		address: 'rua da mata',
		birth: '03-05-2005',
		cep: '00000-000',
		city: 'curitiba',
		cpf: '032.154.645-56',
		email: 'jr@gmail.com',
		password: '123456789',
		state: 'paraná',
	}
	return await userServices.createUser(user);
}

export const singUpMethods = {
	singUp, validateForm,
}
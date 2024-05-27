import { dataServices } from "../../services/firebase"

async function singUp() {
  const user: User = {
    name: 'junior',
    address : 'rua da mata',
    birth : '03-05-2005',
    cep: '00000-000',
    city : 'curitiba',
    cpf: '032.154.645-56',
    email: 'jr@gmail.com',
    password: '123456789',
    state: 'paraná',
  }
  return await dataServices.createUser(user);
}

export const singUpMethods = {
  singUp,
}
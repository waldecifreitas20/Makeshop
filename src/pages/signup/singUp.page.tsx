import { useState } from "react";
import { BackHomeButton } from "../../components/BackHomeButton";

import { ResponsibleButton } from "../../components/ResponsibleButton";
import { formUtils } from "../../utils/forms";
import { Row } from "./components/Row";
import { userServices } from "../../services/user.services";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { LabelBlock } from "./components/LabelBlock";
import { ResponsibleComponent } from "../../components/ResponsibleComponent";


function validateForm(userData: any,
  onInvalid: (
    message: string,
    input: HTMLInputElement,
  ) => void): boolean {

  const { result: hasEmptyFields, emptyInput } = formUtils.checkEmptyFields(userData);
  if (hasEmptyFields) {
    onInvalid("Preencha todos os campos", emptyInput);
    return false;
  }

  if (!formUtils.isValidEmail(userData.email.value)) {
    onInvalid("Digite um email válido", userData.email);
    return false;
  }

  if (!formUtils.isValidPassword(userData.password.value, true)) {
    onInvalid("Senha precisa conter entre 8 e 16 caracteres", userData.password);
    return false;
  }

  return true;
}

async function signUp(userData: any) {
  const user: User = {
    name: userData.name.value,
    address: userData.address.value,
    birth: userData.birth.value,
    cep: userData.cep.value,
    city: userData.city.value,
    cpf: userData.cpf.value,
    email: userData.email.value,
    password: userData.password.value,
    state: userData.state.value,
  }

  return await userServices.createUser(user);
}

function getStatesNames() {
  return [
    'pará', 'são paulo', 'mato grosso',
    'mato grosso do sul', 'rio de janeiro',
    'maranhão', 'acre', 'amapá', 'rondônia',
    'roraima', 'tocantins', 'piauí',
    'paraná', 'distrito federal', 'goiás',
    'bahia', 'paraíba', 'pernambuco',
    'rio grande do norte', 'ceará', 'alagoas',
    'rio grande do sul', 'sergipe', 'santa catarina',
    'espirito santo', 'minas gerais', 'amazonas'
  ];
}


export function SignUpPage() {
  /* STATES */
  const [isLoading, setLoaderState] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    birth: "",
    cep: "",
    city: "",
    cpf: "",
    email: "",
    password: "",
    state: "",
  });

  const onSubmit = async (event: React.MouseEvent) => {

    event.preventDefault();

    const isValid = validateForm(userData, (message, input) => {
      alert(message);
      formUtils.setInvalidInput(input);
      event.preventDefault();
      setLoaderState(false);
    });

    if (isValid) {
      setLoaderState(true);
      signUp(userData)
        .then(console.log)
        .catch(() => {
          alert("Usuário já cadastrado! Faça o login em vez disto.")
        }).finally(() => {
          setLoaderState(false);
        });
    }
  }

  return <>
    <div className="px-8 py-10">
      <div className="mb-5">
        <BackHomeButton />
      </div>

      <form id="signup-form" className="md:max-w-[700px] mx-auto" method="GET" action="/">
        <fieldset>
          <LabelBlock label="Nome Completo">
            <ResponsibleInput
              id="name"
              type="text"
              placeholder="Ex: José Ribamar da Silva"
              onChange={(event => {
                setUserData({
                  ...userData,
                  name: event.target.value,
                })
              })}
            />
          </LabelBlock>

          <Row style="flex-wrap">

            <LabelBlock label="CPF">
              <ResponsibleInput
                id="cpf"
                type="text"
                placeholder="xxx.xxx.xxx-xx"
                onChange={(event => {
                  setUserData({
                    ...userData,
                    cpf: event.target.value,
                  })
                })}
              />
            </LabelBlock>

            <LabelBlock label="Data de Nascimento">
              <ResponsibleInput placeholder="dd/mm/aa" type="date"
                onChange={(event => {
                  setUserData({
                    ...userData,
                    cpf: event.target.value,
                  })
                })} />
            </LabelBlock>
          </Row>
        </fieldset>

        <fieldset className="my-8">
          <LabelBlock label="CEP">
            <ResponsibleInput placeholder="00000-000"
              onChange={(event => {
                setUserData({
                  ...userData,
                  cep: event.target.value,
                })
              })} />
          </LabelBlock>

          <Row style="flex-wrap">
            <ResponsibleComponent style="w-[100%]">
              <label htmlFor="state-select">Estado</label>
              <select id="state-select" onChange={(event => {
                setUserData({
                  ...userData,
                  state: event.target.value,
                })
              })}>
                <option value="null">--- Selecione ---</option>
                {getStatesNames().map((state, _) => {
                  return <>
                    <option value={state}>{state.toUpperCase()}</option>
                  </>
                })}
              </select>
            </ResponsibleComponent>

            <LabelBlock label="Cidade">
              <ResponsibleInput placeholder="00000-000"
                onChange={(event => {
                  setUserData({
                    ...userData,
                    city: event.target.value,
                  })
                })} />
            </LabelBlock>
          </Row>

          <LabelBlock label="Endereço">
            <ResponsibleInput placeholder="Rua Castro 475 B"
              onChange={(event => {
                setUserData({
                  ...userData,
                  address: event.target.value,
                })
              })}
            />
          </LabelBlock>
        </fieldset>

        <fieldset>
          <LabelBlock label="email">
            <ResponsibleInput placeholder="joseribamar23@outlook.com" type="email"
              onChange={(event => {
                setUserData({
                  ...userData,
                  email: event.target.value,
                })
              })} />
          </LabelBlock>

          <Row style="flex-wrap">
            <LabelBlock label="senha">
              <ResponsibleInput placeholder="Minímo 8 caracteres" type="password"
                onChange={(event => {
                  setUserData({
                    ...userData,
                    password: event.target.value,
                  })
                })} />
            </LabelBlock>

            <LabelBlock label="confirme sua senha">
              <ResponsibleInput placeholder="Minímo 8 caracteres" type="password"
                onChange={(event => {
                  setUserData({
                    ...userData,
                    password: event.target.value,
                  })
                })} />
            </LabelBlock>
          </Row>

          <ul className="mx-2">
            <li className="text-green-500"><span>X</span> Contém simbolo</li>
            <li className="text-green-500"><span>X</span> Contém letras maiúsculas</li>
            <li className="text-red-500"><span>X</span> Contém letras minúsculas</li>
            <li className="text-red-500"><span>X</span> Contém no mínimo 8 caracteres</li>
          </ul>
        </fieldset>

        <ResponsibleButton
          style="lg:w-[400px]"
          type="submit"
          onClick={(event) => {
            if (!isLoading) {
              onSubmit(event);
            }
          }}>
          {
            isLoading ?
              <span className="loader mx-auto"></span>
              : "Cadastrar"
          }
        </ResponsibleButton>
      </form>
    </div>
  </>;
}
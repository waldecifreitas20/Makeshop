import { useRef, useState } from "react";
import { BackHomeButton } from "../../components/BackHomeButton";

import { ResponsibleButton } from "../../components/ResponsibleButton";
import { Row } from "./components/Row";
import { userServices } from "../../services/user.services";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { LabelBlock } from "./components/LabelBlock";
import { ResponsibleComponent } from "../../components/ResponsibleComponent";
import { Modal } from "../../components/Modal";

import { formUtils } from "../../utils/forms";
import { utils } from "../../utils/utils";
import { Spinner } from "../../components/Spinner";
import { FormWarning } from "./components/FormWarning";
import { FormWarningBlock } from "./components/FormWaningBlock";
import { useFormData } from "../../hooks/useFormData";





const STATES = [
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



export function SignUpPage() {
  /* REFS */
  const formRef = useRef(null);
  /* STATES */
  const modalVisibility = {
    hidden: true,
    display: false,
  }
  const [isModalHidden, setModalVisibility] = useState(modalVisibility.hidden);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoaderState] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userData, setUserData] = useFormData<User>({
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

    const isValid = validateForm(userData, (message) => {
      setLoaderState(false);
      openModal(message)
    });

    if (!isValid) {
      return event.preventDefault();
    }

    setLoaderState(true);
    try {
      await userServices.signUp(userData);
      utils.getRefContent<HTMLFormElement>(formRef).submit();
    } catch (error: any) {
      openModal(error.message);
    } finally {
      setLoaderState(false);
    }
  }

  function validateForm(userData: any,
    onInvalid: (
      message: string,
    ) => void): boolean {

    try {

      const hasEmptyFields = utils.hasEmptyFields(userData);
      if (hasEmptyFields) {
        throw new Error("É necessário preencher todos os campos.");
      }

      if (!formUtils.isValidEmail(userData.email)) {
        throw new Error("Digite um email válido");
      }

      formUtils.checkPassword(userData.password, true);

      if (passwordCheck !== userData.password) {
        throw new Error("Senhas não são iguais");
      };

      return true;

    } catch (error: any) {
      onInvalid(error.message);
      return false;
    }


  }

  function openModal(message: string) {
    setErrorMessage(message);
    setModalVisibility(modalVisibility.display);
  }

  function isEqualPassword() {
    if (utils.isEmpty(userData.password) || utils.isEmpty(passwordCheck)) {
      return false;
    }
    return userData.password === passwordCheck;
  }


  return <>

    {isModalHidden ? <></> :
      <Modal style="flex flex-col w-[90%] sm:w-[450px]  md:pt-5 md:w-[400px]">
        <p className="text-lg">{errorMessage}</p>

        <ResponsibleButton
          style="md:w-[55%] ml-auto mt-5"
          onClick={() => {
            setModalVisibility(modalVisibility.hidden);
          }}>
          Ok
        </ResponsibleButton>
      </Modal>
    }
    <div className="px-8 py-10">
      <div className="mb-5">
        <BackHomeButton />
      </div>

      <form ref={formRef} id="signup-form" className="md:max-w-[700px] mx-auto" method="GET" action="/">
        {/* PERSONAL DATA */}
        <fieldset>
          <LabelBlock label="Nome Completo">
            <ResponsibleInput
              id="name"
              type="text"
              placeholder="Ex: José Ribamar da Silva"
              onChange={(event => {
                setUserData("name", event.target.value);
              })}
            />
          </LabelBlock>

          <Row style="flex-wrap">

            <LabelBlock label="CPF">
              <ResponsibleInput
                id="cpf"
                type="text"
                placeholder="xxx.xxx.xxx-xx"
                value={userData.cpf}
                onChange={(event => {
                  let value = event.target.value;

                  /* Prevent user overflow */
                  if (value.length > 11) {
                    return;
                  }

                  const lastChar = value[value.length - 1];
                  const isNumber = !isNaN(Number.parseInt(lastChar));

                  if (!isNumber && value !== "") {
                    return;
                  }

                  setUserData("cpf", value);

                })}
              />
            </LabelBlock>

            <LabelBlock label="Data de Nascimento">
              <ResponsibleInput placeholder="dd/mm/aa" type="date"
                onChange={(event => {
                  setUserData("birth", event.target.value);
                })} />
            </LabelBlock>
          </Row>
        </fieldset>

        {/* ADDRESS DATA */}
        <fieldset className="my-8">
          <LabelBlock label="CEP">
            <ResponsibleInput placeholder="000.00-000" type="text"
              value={userData.cep}
              onChange={(event => {
                let value = event.target.value;

                /* Prevent user overflow */
                if (value.length > 8) {
                  return;
                }

                const lastChar = value[value.length - 1];
                const isNumber = !isNaN(Number.parseInt(lastChar));

                if (!isNumber && value !== "") {
                  return;
                }

                setUserData("cep", event.target.value);
              })} />
          </LabelBlock>

          <Row style="flex-wrap">
            <ResponsibleComponent style="w-[100%]">
              <label htmlFor="state-select">Estado</label>
              <select id="state-select" onChange={(event => {
                setUserData("state", event.target.value);
              })}>
                <option value="null">--- Selecione ---</option>
                {STATES.map((state, i) => {
                  return <option key={i} value={state}>
                    {state.toUpperCase()}
                  </option>
                })}
              </select>
            </ResponsibleComponent>

            <LabelBlock label="Cidade">
              <ResponsibleInput placeholder="São Paulo"
                onChange={(event => {
                  setUserData("city", event.target.value);
                })} />
            </LabelBlock>
          </Row>

          <LabelBlock label="Endereço">
            <ResponsibleInput placeholder="Rua Castro 475 B"
              onChange={(event => {
                setUserData("address", event.target.value);
              })}
            />
          </LabelBlock>
        </fieldset>

        {/* AUTHENTICATION DATA */}
        <fieldset>
          <LabelBlock label="email">
            <ResponsibleInput placeholder="joseribamar23@outlook.com" type="email"
              onChange={(event => {
                setUserData("email", event.target.value);
              })} />
          </LabelBlock>

          <Row style="flex-wrap">
            <LabelBlock label="senha">
              <ResponsibleInput placeholder="Minímo 8 caracteres" type="password"
                onChange={(event => {
                  setUserData("password", event.target.value);
                })} />
            </LabelBlock>

            <LabelBlock label="confirme sua senha">
              <ResponsibleInput placeholder="Minímo 8 caracteres" type="password"
                onChange={((event) => {
                  const passwordCheck = event.target.value.trim();
                  setPasswordCheck(passwordCheck)
                })} />
            </LabelBlock>
          </Row>

          <FormWarningBlock>
            <FormWarning isValid={isEqualPassword} message="Senhas conferem" />
            <FormWarning isValid={() => formUtils.hasSymbols(userData.password)} message="Contém símbolos" />
            <FormWarning isValid={() => formUtils.hasCapsLetter(userData.password)} message="Contém letras maiúsculas" />
            <FormWarning isValid={() => formUtils.hasLowerCaseLetter(userData.password)} message="Contém letras minúsculas" />
            <FormWarning isValid={() => formUtils.hasNumbers(userData.password)} message="Contém números" />
            <FormWarning isValid={() => userData.password.length > 7 && userData.password.length < 17} message="Contém entre 8 e 16 caracteres" />
          </FormWarningBlock>
        </fieldset>

        <ResponsibleButton
          style="lg:w-[400px] h-[40px] py-0"
          type="submit"
          onClick={(event) => {
            if (!isLoading) {
              onSubmit(event);
            }
          }}>
          {
            isLoading ?
              <Spinner />
              : "Cadastrar"
          }
        </ResponsibleButton>
      </form>
    </div>
  </>;
}
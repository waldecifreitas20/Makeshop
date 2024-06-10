import { ReactElement, useState } from "react";
import { BackHomeButton } from "../../components/BackHomeButton";
import { InputBlock } from "../../components/InputBlock";;
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { formUtils } from "../../utils/forms";
import { Row } from "./components/Row";
import { signUpMethods } from "./signUp.methods";
import { ResponsibleComponent } from "../../components/ResponsibleSelect";

interface InputBlockProps {
  label: string,
  child: ReactElement,
  placeholder?: string,
};

export function LabelBlock(props: InputBlockProps) {
  return <>
    <div className="w-full">
      <label>{props.label}</label>
      {props.child}
    </div>
  </>
}


export function SignUpPage() {

  const [isLoading, setLoaderState] = useState(false);

  const onSubmit = async (event: React.MouseEvent) => {
    const formFields = {
      name: formUtils.getField("signup-form", "name"),
      address: formUtils.getField("signup-form", "address"),
      birth: formUtils.getField("signup-form", "birth-date"),
      cep: formUtils.getField("signup-form", "cep"),
      city: formUtils.getField("signup-form", "city"),
      cpf: formUtils.getField("signup-form", "cpf"),
      email: formUtils.getField("signup-form", "email"),
      password: formUtils.getField("signup-form", "password"),
      state: formUtils.getField("signup-form", "state-select"),
    }
    event.preventDefault();

    const isValid = signUpMethods.validateForm(formFields, (message, input) => {
      alert(message);
      formUtils.setInvalidInput(input);
      event.preventDefault();
      setLoaderState(false);
    });

    if (isValid) {
      setLoaderState(true);
      signUpMethods.signUp(formFields)
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
          <InputBlock inputId="name" label="Nome Completo" placeholder="Ex:José Ribamar da Silva" />
          <Row style="flex-wrap md:flex-nowrap">
            <InputBlock inputId="cpf" label="CPF" placeholder="xxx.xxx.xxx-xx" />
            <InputBlock inputId="birth-date" label="Data de Nascimento" placeholder="dd/mm/aa" type="date" />
          </Row>
        </fieldset>

        <fieldset className="my-8">

          <InputBlock inputId="cep" label="CEP" placeholder="00000-000" />

          <Row style="md:flex items-end">
            <ResponsibleComponent style="w-[100%]">

              <label htmlFor="state-select">Estado</label>

              <select id="state-select">
                <option value="null">--- Selecione ---</option>
                {signUpMethods.getStatesNames().map((state, _) => {
                  return <>
                    <option value={state}>{state.toUpperCase()}</option>
                  </>
                })}
              </select>

            </ResponsibleComponent>
            <InputBlock margins="" inputId="city" label="Cidade" placeholder="00000-000" />
          </Row>

          <InputBlock inputId="address" label="Endereço" placeholder="Rua Castro 475 B" />
        </fieldset>

        <fieldset>
          <InputBlock inputId="email" label="Email" placeholder="joseribamar23@outlook.com" type="email" />
          <InputBlock inputId="password" label="Senha" placeholder="Minímo 8 caracteres" type="password" />

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
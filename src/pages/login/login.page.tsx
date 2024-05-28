import { useState } from "react";
import { BackHomeButton } from "../../components/BackHomeButton";
import { ResponsibleButton } from "../../components/ResponsibleButton";

import { routes } from "../../routes/routes";
import { loginMethods } from "./login.methods";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { formUtils } from "../../utils/forms";


const styles = {
  loginCard: `
    md:mt-8
    md:bg-white
    md:border
    md:w-[400px] 
    md:rounded-lg
    md:mx-auto 
    md:py-10 md:px-8
  `,
  externalLoginButton: `
    bg-white
    border
    block
    mx-auto my-2
    flex justify-between items-center
    px-7 py-3
    text-sm
    capitalize
    w-[300px]
    hover:bg-zinc-100
    `,
  icon: `
    block
    size-6
  `
}

export function LoginPage() {
  const [showInvalidFormMessage, setFormMessageState] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState("");
  const [isLoading, setLoadingState] = useState(false);

  const onInvalidForm = (message: string, input: HTMLInputElement) => {
    formUtils.setInvalidInput(input);
    setFormMessageState(true);
    setInvalidFormMessage(message);
  }

  const onSubmit = async (event: React.MouseEvent) => {
    setFormMessageState(false);

    const isValid = loginMethods.validateLoginForm(onInvalidForm);

    if (!isValid) {
      event.preventDefault();
      return;
    }

    setLoadingState(true);
    await loginMethods.login()
      .catch((err: Error) => {
        event.preventDefault();
        setFormMessageState(true);
        setInvalidFormMessage(err.message);
      })
      .finally(() => setLoadingState(false));

  }

  return <>
    <div className="px-8 pt-10">
      <BackHomeButton />
      <main className={`mt-16 mx-auto max-w-[400px] ${styles.loginCard}`}>
        <h1 className="text-center text-3xl mb-10 lg:text-2xl">Faça login e aproveite nossas ofertas</h1>

        <form id="login-form" method="GET" action="/">
          <div>
            <ResponsibleInput
              id="email"
              type="email"
              placeholder="Email"
              onChange={() => setFormMessageState(false)}
            />
          </div>

          <div className="mt-2 mb-1">
            <ResponsibleInput
              id="password"
              placeholder="Senha"
              type="password"
              onChange={() => setFormMessageState(false)}
            />
          </div>
          {
            showInvalidFormMessage ?
              <small
                className="font-medium text-red-500"
              >{invalidFormMessage}</small>
              : <></>
          }

          <a className="block ml-auto w-fit mr-5 text-sm" href="">Esqueci minha senha</a>

          <ResponsibleButton
            disabled={isLoading}
            type="submit"
            style={isLoading ? "bg-white hover:bg-white" : ""}
            onClick={(event) => {
              if (!isLoading) {
                onSubmit(event);
              }
            }}>
            {
              isLoading ?
                <span className="loader mx-auto"></span>
                : "Entrar"
            }
          </ResponsibleButton>
          <a className="block mx-auto w-fit text-sm" href={routes.singUp}>Não tenho cadastro</a>
        </form>
      </main>
    </div>
  </>;
}
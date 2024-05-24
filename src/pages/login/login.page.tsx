import { useState } from "react";
import { BackHomeButton } from "../../components/BackHomeButton";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { ResponsibleInput } from "../../components/ResponsibleInput";

import { routes } from "../../routes/routes";
import { isEmpty } from "../../utils/utils";
import { setInvalidInput } from "../../utils/forms";


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
  input: `
    block 
    border border-zinc-400 rounded-full 
    w-full 
    px-5 py-2 
    text-lg

    md:py-2
    md:text-sm
    md:px-2

    lg:rounded-md
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
  const [showInvalidFormMessage, setFormMessageState] = useState(true);


  const validateForm = (event: MouseEvent) => {
    const email = document.getElementById("email-input") as HTMLInputElement;
    const password = document.getElementById("password-input") as HTMLInputElement;

    if (isEmpty(email.value)) {
      emitFormError(event, email);
    }
    if (isEmpty(password.value)) {
      emitFormError(event, password);
    }

  }

  const emitFormError = (event: MouseEvent, input: HTMLInputElement) => {
    event.preventDefault();
    setInvalidInput(input);
    setFormMessageState(false);
  }


  return <>
    <div className="px-8 pt-10">
      <BackHomeButton />
      <main className={`mt-16 mx-auto max-w-[400px] ${styles.loginCard}`}>
        <h1 className="text-center text-3xl mb-10 lg:text-2xl">Faça login e aproveite nossas ofertas</h1>

        <form id="signup-form" method="GET" action="/">
          <div>
            <input
              id="email-input"
              className={styles.input}
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mt-2 mb-1">
            <input
              id="password-input"
              className={styles.input}
              placeholder="Senha"
              type="password"
            />
          </div>
          <small className={showInvalidFormMessage ? "hidden" : "font-medium text-red-500"}>Preencha os campos corretamente</small>

          <a className="block ml-auto w-fit mr-5 text-sm" href="">Esqueci minha senha</a>

          <ResponsibleButton
            type="submit"
            text="Entrar"
            onClick={(event) => { validateForm(event.nativeEvent) }}
          />
          <a className="block mx-auto w-fit text-sm" href={routes.singUp}>Não tenho cadastro</a>
        </form>
      </main>
    </div>
  </>;
}
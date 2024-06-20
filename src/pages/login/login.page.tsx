import { useRef, useState } from "react";
import { BackHomeButton } from "../../components/BackHomeButton";
import { ResponsibleButton } from "../../components/ResponsibleButton";

import { routes } from "../../routes/routes";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { formUtils } from "../../utils/forms";
import { userServices } from "../../services/user.services";
import { Spinner } from "../../components/Spinner";
import { utils } from "../../utils/utils";
import { storageServices } from "../../services/storage.services";


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
  `,
  link: `block w-fit text-sm`
}

export function LoginPage() {
  /* REFS */
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const formRef = useRef(null);
  /* STATES */
  const [showInvalidFormMessage, setFormMessageState] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState("");
  const [isLoading, setLoadingState] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });


  /* METHODS */
  async function onSubmit(event: React.MouseEvent): Promise<void> {
    setFormMessageState(false);

    const isValid = validateLoginForm();
    if (!isValid) {
      return event.preventDefault();
    }

    setLoadingState(true);

    try {
      // TRY TO AUTHENTICATE USER
      storageServices.clear();
      await userServices.authenticate(credentials.email, credentials.password);
      const form = utils.getRefContent<HTMLFormElement>(formRef);
      form.action = "/";
      form.submit();

    } catch (error: any) {
      // SET SCREEN ALERT
      event.preventDefault();
      setFormMessageState(true);
      setInvalidFormMessage(error.message);
      
    } finally {
      setLoadingState(false);
    }
  }


  function validateLoginForm(): boolean {

    if (!formUtils.isValidEmail(credentials.email)) {
      onInvalidForm(
        "Digite um email válido",
        utils.getRefContent(emailInputRef),
      );
      return false;
    }

    try {
      formUtils.checkPassword(credentials.password);
    } catch (error: any) {
      const input = utils.getRefContent<HTMLInputElement>(passwordInputRef)
      onInvalidForm(error.message, input);
      return false;
    }

    return true;
  }


  function onInvalidForm(message: string, input: HTMLInputElement): void {
    formUtils.setInvalidInput(input);
    setFormMessageState(true);
    setInvalidFormMessage(message);
  }



  return <>
    <div className="px-8 pt-10">
      <BackHomeButton />
      <main className={`mt-16 mx-auto max-w-[400px] ${styles.loginCard}`}>
        <h1 className="text-center text-3xl mb-10 lg:text-2xl">Faça login e aproveite nossas ofertas</h1>

        <form ref={formRef} id="login-form" method="GET">

          <ResponsibleInput
            reference={emailInputRef}
            id="email"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setCredentials({
                ...credentials,
                email: event.target.value
              });
              setFormMessageState(false);
            }}
          />


          <div className="mt-2 mb-1">
            <ResponsibleInput
              reference={passwordInputRef}
              id="password"
              placeholder="Senha"
              type="password"
              onChange={(event) => {
                setCredentials({
                  ...credentials,
                  password: event.target.value
                });
                setFormMessageState(false);
              }}
            />
          </div>
          {
            showInvalidFormMessage ?
              <small
                className="font-medium text-red-500"
              >{invalidFormMessage}</small>
              : <></>
          }

          <a className={`${styles.link} ml-auto`} href="">Esqueci minha senha</a>

          <ResponsibleButton
            disabled={isLoading}
            type="submit"
            style={isLoading ? "bg-gray hover:bg-white" : ""}
            onClick={(event) => {
              if (!isLoading) {
                onSubmit(event);
              }
            }}>

            {
              isLoading ?
                <Spinner />
                : "Entrar"
            }

          </ResponsibleButton>

          <a className={`${styles.link} mx-auto`} href={routes.signUp}>Não tenho cadastro</a>
        </form>
      </main>
    </div>
  </>;
}
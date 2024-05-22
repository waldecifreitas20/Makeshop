import { Pill } from "../../components/Pill";
import { routes } from "../../routes/routes";

export function LoginPage() {
  const styles = {
    input: `
      block 
      border border-zinc-400 rounded-full 
      w-full 
      px-5 py-3 
      my-2
      text-lg
    `,
    loginButton: `
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

  return <>
    <div className="px-8 pt-10">

      <header>
        <div>
          <i className="fa-solid fa-chevron-left mr-2"></i>
          <a href={routes.home}>Voltar à Home</a>
        </div>
      </header>

      <main className="mt-16">
        <h1 className="text-center text-3xl mb-10">Faça login e aproveite nossas ofertas</h1>

        <form action="">
          <input className={styles.input} required placeholder="Email" type="email" />
          <input className={styles.input} required placeholder="Senha" type="password" />
          <a className="block ml-auto w-fit mr-5" href="">Esqueci minha senha</a>

          <Pill style="mt-4 mb-2 bg-neutral-800 hover:bg-black py-3 text-xl text-white transition-all duration-300" text="Entrar"/>
          <a className="block mx-auto w-fit" href="">Não tenho cadastro</a>

          {/* Future feature 
          <div className="mt-8 mb-3 relative">
            <span className="border border-gray-200 block"></span>
            <span className="block bg-zinc-50 text-gray-300 w-fit px-1 mx-auto relative -top-[14px]">ou</span>
          </div>

          <div>
            <button className={styles.loginButton}>
              <span>Fazer login com google</span>
              <img className={styles.icon} src="./images/icon-google.png" alt="" />
            </button>
            <button className={styles.loginButton}>
              <span>Fazer login com facebook</span>
              <img className={styles.icon} src="./images/icon-facebook.svg" alt="" />
            </button>
            <button className={styles.loginButton}>
              <span>Fazer login com X</span>
              <img className={styles.icon} src="./images/icon-x.png" alt="" />
            </button>
          </div>
            */}
        </form>
      </main>
    </div>
  </>;
}
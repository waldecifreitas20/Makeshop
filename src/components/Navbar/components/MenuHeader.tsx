import { useContext } from "react";
import { routes } from "../../../routes/routes";
import { UserContext } from "../../../providers/user.provider";
import { userServices } from "../../../services/user.services";

export function MenuHeader(props: { isLoggedIn: boolean }) {

  const { userData } = useContext(UserContext);

  const NON_LOGGED_IN_HEADER = (

    <div className="pt-8 px-4">
      <h2 className="text-black text-xl">Bem-vindo!</h2>
      <p className="text-black text-sm mt-2">
        Faça login ou cadastre-se para aproveitar as nossas ofertas
      </p>

      <div className="mt-4">
        <a className={`
          block py-2 mb-2 
          rounded-full
          border
          border-transparent

          bg-pink-400  hover:bg-pink-500         
          text-white 
          
          transition-all duration-300`} href={routes.login}>Fazer Login</a>
        <a className={`
          block py-2 
          rounded-full 
          text-pink-400  hover:text-white
          border border-pink-400
          hover:bg-pink-400       
          transition-all duration-300 `} href={routes.signUp}>Cadastre-se</a>
      </div>
    </div>

  );

  return (
    <div className="
      bg-zinc-50 
      px-2 pb-6 
      text-center 
      
      lg:hidden
    ">
      {props.isLoggedIn ?
        (
          <div className="pt-8">

            <div className="flex h-full w-full items-start text-white">
              <div className="bg-pink-500 size-14 shrink-0 flex justify-center items-center rounded-full">
                <i className="fa-regular fa-user fa-xl text-black"></i>
              </div>

              <div className="text-left ml-2 text-sm shrink">
                <h2 className="text-white capitalize text-lg"
                >
                  Bem vindo, {userData.name.split(" ")[0].toLowerCase()}!
                </h2>

                <p className="text-white">{userData.email}</p>

                <div className="text-xs mt-1 text-neutral-400">
                  <a className="hover:text-white " href="">Minha conta</a>
                  <button className="hover:text-white ml-4" onClick={() => {
                    userServices.logout();
                  }}>Sair</button>
                </div>

              </div>
            </div>

          </div>
        )
        :
        NON_LOGGED_IN_HEADER
      }
    </div>
  );
}
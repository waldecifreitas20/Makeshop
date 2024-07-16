import { useContext } from "react";
import { routes } from "../../../routes/routes";
import { UserContext } from "../../../providers/user.provider";

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
      px-2  
      text-center 
      
      lg:hidden
    ">
      {props.isLoggedIn ?
        (
          <div className="py-8 px-2">

            <div className="flex h-full w-full items-start">
              <div className="border-pink-400 border size-14 shrink-0 flex justify-center items-center rounded-full">
                <i className="fa-regular fa-user fa-xl text-pink-400"></i>
              </div>

              <div className="text-left ml-2 text-sm shrink">
                <h2 className="text-black capitalize text-lg"
                >
                  Bem vindo, {userData.name.split(" ")[0].toLowerCase()}!
                </h2>

                <p className="text-black">{userData.email}</p>
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
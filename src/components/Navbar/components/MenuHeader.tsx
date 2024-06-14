import { appColors } from "../../../global/colors";
import { routes } from "../../../routes/routes";

export function MenuHeader() {
  return <>
    <div className="
      bg-zinc-950 
      px-5 pt-16 pb-6 
      text-center 

      lg:hidden
      ">
      
      <h2 className="text-white text-xl">Bem-vindo!</h2>
      <p className="text-white text-sm mt-2">
        Faça login ou cadastre-se para aproveitar as nossas ofertas
      </p>

      <div className="mt-4">
        <a className={`
        block py-2 mb-2 
        rounded-full
        border 
        ${appColors.borders.outlinedButton} 
        ${appColors.backgrounds.buttons.normalOutline}
        text-white 
        
        transition-all duration-300`} href={routes.login}>Fazer Login</a>
        <a className={`
        block py-2 
        text-white  
        rounded-full 
                          
        ${appColors.backgrounds.buttons.normal}

        transition-all duration-300 `} href={routes.signUp}>Cadastre-se</a>
      </div>
    </div>
  </>
}
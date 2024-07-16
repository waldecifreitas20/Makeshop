import { ReactElement } from "react";
import { utils } from "../../../utils/utils";
import { userServices } from "../../../services/user.services";
import { routes } from "../../../routes/routes";

interface MenuOption {
  child: ReactElement;
  isLoginRequired: boolean;
}

export function MenuOptions(props: { isLoggedIn: boolean }) {
  const MENU_OPTION_STYLE = `
	px-5
	py-5
	block
  w-full
	relative
	uppercase
	
	bg-white
	text-sm
  text-left
	text-zinc-500
	cursor-pointer
	hover:text-black
	hover:bg-gray-100
	
	lg:static
	lg:bg-transparent
	lg:hover:bg-transparent
	lg:py-0
	lg:px-4
	lg:capitalize
`;

  const SUBMENU_STYLE = `
	ms-5 py-4 hover:text-black uppercase text-gray-400 text-sm

	lg:m-0
	lg:bottom-0
	lg:capitalize
	lg:py-2
	lg:px-4
	lg:bg-transparent
`;

  const MENU_OPTIONS: MenuOption[] = [
    {
      child: <li>
        <a className={MENU_OPTION_STYLE} href={routes.home}>Home</a>
      </li>, isLoginRequired: false,
    },
    {
      child: <li className="dropdown">
        <div className={`${MENU_OPTION_STYLE} flex justify-between items-center
        
        `}>
          Categorias
          <i className="hidden lg:block ml-2 fa-solid fa-caret-down fa-sm opacity-60"></i>
        </div>
        <ul className="
        w-full ps-4 bg-slater-50 transition-all duration-500 bg-white
        
        dropdown-content
        lg:relative
        lg:bottom-0
        lg:rounded-b-lg
        lg:shadow-lg
        lg:mt-3 
        
        ">
          <li className={SUBMENU_STYLE}>
            <a className="block h-full w-full" href="">Maquiagem</a></li>
          <li className={SUBMENU_STYLE}>
            <a className="block h-full w-full" href="">Cosméticos</a></li>
          <li className={SUBMENU_STYLE}>
            <a className="block h-full w-full" href="">Perfumes</a></li>
        </ul>
      </li>, isLoginRequired: false,
    },
    { child: <li><a className={MENU_OPTION_STYLE} href=""> Sessão VIP</a></li>, isLoginRequired: false, },
    { child: <li><a className={MENU_OPTION_STYLE} href=""> Ofertas</a></li>, isLoginRequired: false, },
    { child: <li><a className={MENU_OPTION_STYLE} href=""> Marcas</a></li>, isLoginRequired: false, },
    { child: <li><a className={MENU_OPTION_STYLE} href=""> Minha Conta</a></li>, isLoginRequired: true, },
    { child: <li><a className={MENU_OPTION_STYLE} href=""> Sobre a Makeshop</a></li>, isLoginRequired: false, },
    {
      child: <li><button className={MENU_OPTION_STYLE} onClick={() => {
        userServices.logout();
      }}> Sair</button></li>, isLoginRequired: true,
    },
  ]


  return (
    <>
      {MENU_OPTIONS.map((menuOption: MenuOption) => {
        const isUserNotAuthenticated = menuOption.isLoginRequired && !props.isLoggedIn;
        const isNotSmallDevice = menuOption.isLoginRequired && !utils.isSmallDevice();

        if (isUserNotAuthenticated || isNotSmallDevice) {
          return <></>;
        }
        return menuOption.child;
      })}
    </>
  );
}
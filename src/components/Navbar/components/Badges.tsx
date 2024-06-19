import { useContext } from "react";
import { routes } from "../../../routes/routes";
import { userServices } from "../../../services/user.services";
import { Tile } from "../../Tile";

export function NavbarBadges(props: { isLoggedIn: boolean }) {

  const LOGGED_IN_BADGE = (
    <>
      <p className="text-xs">
        Faça
        <a className="text-pink-500 font-bold hover:underline ml-1" href={routes.login}>
          Login
        </a>
      </p>
      <p className="text-xs">
        ou
        <a className="font-bold text-pink-500 hover:underline ml-1" href={routes.signUp}>
          Cadastre-se
        </a>
      </p>
    </>
  );

  const NON_LOGGED_IN_BADGE = (
    <>
      <p className="text-xs">
        Minha Conta
      </p>
      <button
        className="font-bold text-xs hover:underline"
        onClick={() => {
          userServices.logout();
        }}>
        Sair
      </button>
    </>
  );
  return <>
    <div className="hidden md:flex xl:w-[40%] lg:w-[45%] md:w-[60%] items-center justify-between ml-4">
      {/* favorites */}
      <Tile leading={<i className="fa-regular fa-heart fa-xl"></i>}>
        <p className="text-xs">Favoritos</p>
        <a className="font-bold text-xs hover:underline" href="">Meus Favoritos</a>
      </Tile>

      {/* cart */}
      <Tile leading={<i className="fa-solid fa-cart-shopping fa-xl"></i>}>
        <p className="text-xs">Meu carrinho</p>
        <a className="font-bold text-xs hover:underline" href="">R$ 0,00</a>
      </Tile>

      {/* account */}
      <Tile leading={<i className="fa-regular fa-user fa-xl"></i>}>
        {
          props.isLoggedIn ? NON_LOGGED_IN_BADGE : LOGGED_IN_BADGE
        }
      </Tile>
    </div>
  </>
}
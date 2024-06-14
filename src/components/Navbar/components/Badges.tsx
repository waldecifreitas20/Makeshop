import { routes } from "../../../routes/routes";
import { Tile } from "../../Tile";

export function NavbarBadges() {
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
        <p className="text-xs">Faça <a className="text-pink-500 font-bold hover:underline" href={routes.login}>Login</a></p>
        <p className="text-xs">ou <a className="font-bold text-pink-500 hover:underline" href={routes.signUp}>cadastre-se</a></p>
      </Tile>
    </div>
  </>
}
import { ReactElement } from "react";

interface MenuOption {
	child: ReactElement;
	loginRequired: boolean;
}

let isLogged: boolean = true;

const menuOptions: MenuOption[] = [
	{ child: <li>Home</li>, loginRequired: false, },
	{ child: <li>Categorias</li>, loginRequired: false, },
	{ child: <li>Sessão VIP</li>, loginRequired: false, },
	{ child: <li>Ofertas</li>, loginRequired: false, },
	{ child: <li>Marcas</li>, loginRequired: false, },
	{ child: <li>Minha Conta</li>, loginRequired: true, },
	{ child: <li>Sobre a Makeshop</li>, loginRequired: false, },
	{ child: <li>Sair</li>, loginRequired: true, },
]

export function Navbar() {

	return (
		<>
			<header className="bg-white border-b-2">
				<nav>
					{/* Menu button */}
					<div id="menu-toggler">
						<input type="checkbox" id="toggle" />
						<label htmlFor="toggle">
							<i className="fa-solid fa-bars fa-lg"></i>
						</label>
					</div>

					{/* Logo */}
					<a href="">Makeshop</a>


					<div id="menu">
						<div className="bg-black">
							<h2>Bem-vindo</h2>
							<p>Faça login ou cadastre-se para aproveitar as nossas ofertas </p>

							<div>
								<a href="">Fazer Login</a>
								<a href="">Cadastre-se</a>
							</div>
						</div>

						<ul>
							{/* <li><a href="">Home</a></li>
							<li>
								Categorias
								<span>

								</span>
								<ul>
									<li>Maquiagem</li>
									<li>Cosméticos</li>
									<li>Perfumes</li>
								</ul>
							</li>
							<li><a href="">Sessão VIP</a></li>
							<li><a href="">Ofertas</a></li>
							<li><a href="">Marcas</a></li>
							<li><a href="">Sobre a Makeshop</a></li> */}

							{menuOptions.map((menuOption: MenuOption) => {
								if (menuOption.loginRequired && !isLogged) {
									return <></>;
								}
								return menuOption.child;
							})}
						</ul>
					</div>

				</nav>
			</header>
		</>
	);
}
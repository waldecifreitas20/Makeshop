import { ReactElement, useState } from "react";

interface MenuOption {
	child: ReactElement;
	loginRequired: boolean;
}

const menuOptions: MenuOption[] = [
	{ child: <li>Home</li>, loginRequired: false, },
	{
		child: <li>Categorias
			<span>{'>'}</span>
			<ul>
				<li><a href="">Maquiagem</a></li>
				<li><a href="">Cosméticos</a></li>
				<li><a href="">Perfumes</a></li>
			</ul>
		</li>, loginRequired: false,
	},
	{ child: <li>Sessão VIP</li>, loginRequired: false, },
	{ child: <li>Ofertas</li>, loginRequired: false, },
	{ child: <li>Marcas</li>, loginRequired: false, },
	{ child: <li>Minha Conta</li>, loginRequired: true, },
	{ child: <li>Sobre a Makeshop</li>, loginRequired: false, },
	{ child: <li>Sair</li>, loginRequired: true, },
]


export function Navbar() {
	let [isLogged, setLogin] = useState(false);
	let [showSearchBar, setSearchBarView] = useState(true);
	
	function toggleSearchBarView() {
		setSearchBarView(!showSearchBar);
	}

	return (
		<>
			<header className="bg-slate-50 border-b-2">
				<nav>
					{/* navbar top */}
					<div>

						{/* Menu button */}
						<div id="menu-toggler">
							<input type="checkbox" id="toggle" />
							<label htmlFor="toggle">
								<i className="fa-solid fa-bars fa-lg"></i>
							</label>
						</div>

						{/* Logo */}
						<a href="">Makeshop</a>

						{/* Menu */}
						<div id="menu">
							<div className="bg-black">
								<h2>Bem-vindo</h2>
								<p>Faça login ou cadastre-se para aproveitar as nossas ofertas </p>

								<div>
									<a href="">Fazer Login</a>
									<a href="">Cadastre-se</a>
								</div>
							</div>

							{/* Menu options*/}
							<ul>
								{menuOptions.map((menuOption: MenuOption) => {
									if (menuOption.loginRequired && !isLogged) {
										return <></>;
									}
									return menuOption.child;
								})}
							</ul>
						</div>


						<div>
							<span onClick={toggleSearchBarView}>lupa</span>
							<div></div>
							<span>kart</span>
						</div>
					</div>

					{/* navbar bottom */}
					{showSearchBar ? <form id="search-form" className="">
						<input type="search" id="input-search" placeholder="Pesquise produtos e marcas" />
						<label htmlFor="input-search">
							<span>Lupa</span>
						</label>
					</form> : <></>}
				</nav>
			</header>
		</>
	);
}
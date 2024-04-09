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
	let isLogged = true;
	let [showSearchBar, setSearchBarView] = useState(true);
	let [showMenu, setSMenuView] = useState(false);

	function toggleSearchBarView() {
		setSearchBarView(!showSearchBar);
	}

	function toggleMenuView() {
		setSMenuView(!showMenu);
	}

	return (
		<>
			<header className="bg-slate-50 border-b-2 p-5">
				<nav>
					{/* navbar top */}
					<div className="flex items-center">

						{/* Menu button */}
						<button onClick={toggleMenuView} className="mr-4">
							<i className="fa-solid fa-bars fa-2xl"></i>
						</button>


						{/* Logo */}
						<a href="" className="text-4xl font-title tracking-tightest font-extrabold text-gray-650">Makeshop</a>

						{/* Menu */}
						{showMenu ? <div id="menu">
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
						</div> : <></>}


						<div className="ml-auto flex">
							<span onClick={toggleSearchBarView}>lupa</span>
							<div className="border-gray-400 border-l mx-3"></div>
							<span>kart</span>
						</div>
					</div>

					{/* navbar bottom */}
					{showSearchBar ? <form id="search-form" className="bg-white mt-5 border-2 h-12 flex items-center justify-between px-5 rounded-full">
						<input className="h-full w-full outline-none text-lg" type="search" id="input-search" placeholder="Pesquise produtos e marcas" />
						<label htmlFor="input-search">
							<span>Lupa</span>
						</label>
					</form> : <></>}
				</nav>
			</header>
		</>
	);
}
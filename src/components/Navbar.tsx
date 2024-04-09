import { ReactElement, useRef, useState } from "react";

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
	let isLogged: boolean = true;
	let [showSearchBar, setSearchBarView] = useState(true);
	let [menuClass, setMenuClass] = useState('close-menu');

	/* Close menu when user click outside it */
	document.addEventListener('click', (event: MouseEvent) => {
		
		event.stopPropagation();

		const menu = document.getElementById("menu");
		const element = event.target as HTMLElement;

		const isOutsideClick = menu?.contains(element) == false;
		const isMenuButton = element.id == "menu-icon";
		
		if (isOutsideClick == true && isMenuButton == false) {
			console.log(element.id);
			setMenuClass('close-menu');
		}

	});


	function toggleSearchBarView() {
		setSearchBarView(!showSearchBar);
	}

	function openMenuView() {

		setMenuClass('open-menu')
	}

	return (
		<>
			<header className="border-b-2 py-4 px-5">
				<nav>
					{/* navbar top */}
					<div className="flex items-center">

						{/* Menu button */}
						<button onClick={openMenuView} className="mr-5">
							<i id="menu-icon" className="fa-solid fa-bars fa-2xl"></i>
						</button>


						{/* Logo */}
						<a href="" className="text-3xl font-title tracking-tightest font-extrabold text-gray-650">Makeshop</a>

						{/* Menu */}
						<div id="menu" className={`absolute transition-all w-8/12 duration-500 top-0 left-0 bg-white h-screen ${menuClass}`}>
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



						<div className="ml-auto flex">
							<button onClick={toggleSearchBarView}>
								<i className="fa-solid fa-magnifying-glass fa-xl"></i>
							</button>
							<div className="border-gray-400 border-l mx-3"></div>
							<button>
								<i className="fa-solid fa-cart-shopping fa-xl"></i>
							</button>
						</div>
					</div>

					{/* navbar bottom */}
					{showSearchBar ? <form id="search-form" className="bg-white mt-5 border-2 h-12 flex items-center justify-between px-5 rounded-full focus-within:border-fuchsia-300 transition-all duration-300">
						<input className="h-full w-full outline-none text-lg mr-4" type="search" id="input-search" placeholder="Pesquise produtos e marcas" />
						<button>
							<i className="fa-solid fa-magnifying-glass fa-lg text-gray-500"></i>
						</button>
					</form> : <></>}
				</nav>
			</header>
		</>
	);
}
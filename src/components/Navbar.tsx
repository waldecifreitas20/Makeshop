import { ReactElement, useRef, useState } from "react";

interface MenuOption {
	child: ReactElement;
	loginRequired: boolean;
}

const MENU_STATE = {
	OPEN: true,
	CLOSE: true
}

const menuOptionStyle = `
	px-5
	py-4
	block
	hover:bg-zinc-100
	uppercase
	`;

const menuOptions: MenuOption[] = [
	{ child: <li className={menuOptionStyle}>Home</li>, loginRequired: false, },
	{
		child: <li className={menuOptionStyle + "ancestor relative flex z-10 items-center justify-between"} >Categorias
			<i className="fa-solid fa-caret-right fa-sm opacity-60 z-20"></i>
			<ul className="child">
				<li><a href="">Maquiagem</a></li>
				<li><a href="">Cosméticos</a></li>
				<li><a href="">Perfumes</a></li>
			</ul>
		</li>, loginRequired: false,
	},
	{ child: <li className={menuOptionStyle}>Sessão VIP</li>, loginRequired: false, },
	{ child: <li className={menuOptionStyle}>Ofertas</li>, loginRequired: false, },
	{ child: <li className={menuOptionStyle}>Marcas</li>, loginRequired: false, },
	{ child: <li className={menuOptionStyle}>Minha Conta</li>, loginRequired: true, },
	{ child: <li className={menuOptionStyle}>Sobre a Makeshop</li>, loginRequired: false, },
	{ child: <li className={menuOptionStyle}>Sair</li>, loginRequired: true, },
]


export function Navbar() {
	let isLogged: boolean = false;
	let menuState = useRef(MENU_STATE.CLOSE);
	let [showSearchBar, setSearchBarView] = useState(false);
	let [menuClass, setMenuClass] = useState('open-menu');

	/* Close menu when user click outside menu area */
	document.addEventListener('click', closeMenuView);


	function closeMenuView(event: MouseEvent) {
		event.stopPropagation();

		const menu = document.getElementById("menu");
		const element = event.target as HTMLElement;

		const isOutsideClick = menu?.contains(element) == false;
		const isMenuButton = element.id == "menu-icon";

		/* close menu if not click on menu button */
		if (isOutsideClick && !isMenuButton) {
			menuState.current = MENU_STATE.CLOSE;
			setMenuClass('close-menu');
		}
	}


	function toggleSearchBarView() {
		setSearchBarView(!showSearchBar);
	}

	function toggleMenuView() {
		menuState.current = !menuState.current;

		if (menuState.current == MENU_STATE.OPEN) {
			return setMenuClass('open-menu');
		}
		return setMenuClass('close-menu');
	}



	return (
		<>
			<header className="border-b-2 py-4 px-5">
				<nav>
					{/* navbar top */}
					<div className="flex items-center">

						{/* Menu button */}
						<button onClick={toggleMenuView} className={`mr-5 ${menuClass === 'open-menu' ? 'relative z-50 text-white' : ''}`}>
							<i id="menu-icon" className="fa-solid fa-bars fa-2xl"></i>
						</button>


						{/* Logo */}
						<a href="" className="text-3xl font-title tracking-tightest font-extrabold text-gray-650">Makeshop</a>

						{/* Menu */}
						<div id="menu" className={`absolute transition-all w-3/4 duration-500 top-0 left-0 bg-white min-h-screen  ${menuClass}`}>
							<div className="bg-zinc-950 px-5 pt-16 pb-6 text-center">
								<h2 className="text-white text-xl">Bem-vindo!</h2>
								<p className="text-white text-sm mt-2">Faça login ou cadastre-se para aproveitar as nossas ofertas </p>

								<div className="mt-4">
									<a className="
									block py-2 mb-2 
									rounded-full
									border 
									border-pink-400  
									hover:bg-pink-400 
									text-white 
									
									transition-all duration-300" href="">Fazer Login</a>
									<a className="
									block py-2 
									text-white  
									rounded-full 
									border 
									border-pink-500 
									hover:border-pink-500 
									bg-pink-500 
									hover:bg-pink-500 

									transition-all duration-300 " href="">Cadastre-se</a>
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
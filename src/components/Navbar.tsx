import { ReactElement, useRef, useState } from "react";

interface MenuOption {
	child: ReactElement;
	loginRequired: boolean;
}

const MENU_STATE = {
	OPEN: true,
	CLOSE: false
}

const MENU_OPTION_STYLE = `
	px-5
	py-5
	block
	relative
	uppercase
	z-10
	bg-white
	text-sm
	text-zinc-600
	cursor-pointer
	hover:text-black
	hover:bg-gray-100
	`;



const MENU_OPTIONS: MenuOption[] = [
	{ child: <li className={MENU_OPTION_STYLE}>Home</li>, loginRequired: false, },
	{
		child: <li>
			<div className={MENU_OPTION_STYLE + "ancestor flex justify-between items-center"}>
				Categorias
				<i className="hidden md:block fa-solid fa-caret-down fa-sm opacity-60"></i>
			</div>
			<ul className="brother w-full ps-4 bg-slater-50 transition-all duration-500">
				<li className={"ms-5 py-4 hover:text-black uppercase bg-transparent text-gray-400 text-sm"}><a href="">Maquiagem</a></li>
				<li className={"ms-5 py-4 hover:text-black uppercase bg-transparent text-gray-400 text-sm"}><a href="">Cosméticos</a></li>
				<li className={"ms-5 py-4 hover:text-black uppercase bg-transparent text-gray-400 text-sm"}><a href="">Perfumes</a></li>
			</ul>
		</li>, loginRequired: false,
	},
	{ child: <li className={MENU_OPTION_STYLE}>Sessão VIP</li>, loginRequired: false, },
	{ child: <li className={MENU_OPTION_STYLE}>Ofertas</li>, loginRequired: false, },
	{ child: <li className={MENU_OPTION_STYLE}>Marcas</li>, loginRequired: false, },
	{ child: <li className={MENU_OPTION_STYLE}>Minha Conta</li>, loginRequired: true, },
	{ child: <li className={MENU_OPTION_STYLE}>Sobre a Makeshop</li>, loginRequired: false, },
	{ child: <li className={MENU_OPTION_STYLE}>Sair</li>, loginRequired: true, },
]


export function Navbar() {
	let isLogged: boolean = false;
	let menuState = useRef(MENU_STATE.CLOSE);
	let [showSearchBar, setSearchBarView] = useState(false);
	let [menuClass, setMenuClass] = useState('close-menu');

	/* Close menu when user click outside menu area */
	document.addEventListener('click', closeMenuView);


	function closeMenuView(event: MouseEvent) {
		event.stopPropagation();

		const MENU = document.getElementById("menu");
		const ELEMENT = event.target as HTMLElement;

		const IS_OUTSIDE_CLICK = MENU?.contains(ELEMENT) == false;
		const IS_MENU_BUTTON = ELEMENT.id == "menu-icon";

		/* close menu if not click on menu button */
		if (IS_OUTSIDE_CLICK && !IS_MENU_BUTTON) {
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
			<header className="border-b-2 py-4 px-5 z-50">
				<nav>
					{/* navbar top */}
					<div className="flex items-center">

						{/* Menu button */}
						<button onClick={toggleMenuView} className={`mr-5 ${menuClass === 'open-menu' ? 'relative z-50 text-white' : ''}`}>
							<i id="menu-icon" className="fa-solid fa-bars fa-2xl"></i>
						</button>


						{/* Logo */}
						<a href="" className="text-3xl font-title tracking-tightest text-gray-650">Makeshop</a>

						{/* Menu */}
						<div id="menu" className={`shadow-2xl z-40 absolute transition-all w-3/4 duration-500 top-0 left-0 bg-white min-h-screen  ${menuClass}`}>
							<div className="bg-zinc-950 px-5 pt-16 pb-6 text-center relative z-10">
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
							<ul className="-z-0 relative">
								{MENU_OPTIONS.map((menuOption: MenuOption) => {
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
import { ReactElement, useState } from "react";

interface MenuOption {
	child: ReactElement;
	loginRequired: boolean;
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
	text-zinc-500
	cursor-pointer
	hover:text-black
	hover:bg-gray-100
	
	lg:hover:bg-transparent
	lg:bg-transparent
	lg:py-0
	lg:px-4
	lg:capitalize
	`;



const MENU_OPTIONS: MenuOption[] = [
	{
		child: <li>
			<a className={MENU_OPTION_STYLE} href="">Home</a>
		</li>, loginRequired: false,
	},
	{
		child: <li className="z-50">
			<div className={`${MENU_OPTION_STYLE} flex justify-between items-center
			
			`}>
				Categorias
				<i className="hidden lg:block ml-2 fa-solid fa-caret-down fa-sm opacity-60"></i>
			</div>
			<ul className="
			w-full ps-4 bg-slater-50 transition-all duration-500 border bg-white
			
			lg:hidden
			">
				<li className={"ms-5 py-4 hover:text-black uppercase bg-transparent text-gray-400 text-sm"}>
					<a className="block h-full w-full" href="">Maquiagem</a></li>
				<li className={"ms-5 py-4 hover:text-black uppercase bg-transparent text-gray-400 text-sm"}>
					<a className="block h-full w-full" href="">Cosméticos</a></li>
				<li className={"ms-5 py-4 hover:text-black uppercase bg-transparent text-gray-400 text-sm"}>
					<a className="block h-full w-full" href="">Perfumes</a></li>
			</ul>
		</li>, loginRequired: false,
	},
	{ child: <li><a className={MENU_OPTION_STYLE} href=""> Sessão VIP</a></li>, loginRequired: false, },
	{ child: <li><a className={MENU_OPTION_STYLE} href=""> Ofertas</a></li>, loginRequired: false, },
	{ child: <li><a className={MENU_OPTION_STYLE} href=""> Marcas</a></li>, loginRequired: false, },
	{ child: <li><a className={MENU_OPTION_STYLE} href=""> Minha Conta</a></li>, loginRequired: true, },
	{ child: <li><a className={MENU_OPTION_STYLE} href=""> Sobre a Makeshop</a></li>, loginRequired: false, },
	{ child: <li><a className={MENU_OPTION_STYLE} href=""> Sair</a></li>, loginRequired: true, },
]


export function Navbar() {
	let isLogged: boolean = false;
	let [showSearchBar, setSearchBarView] = useState(false);
	let [menuClass, setMenuClass] = useState('close-menu');

	function toggleSearchBarView() {
		setSearchBarView(!showSearchBar);
	}

	function openMenu() {
		setMenuClass('open-menu');
	}

	function closeMenu() {
		setMenuClass('close-menu');
	}

	return (
		<>
			<header className="fixed top-0 z-50 w-full bg-zinc-50">
				<nav className="border-b-2 pt-4 pb-6 px-5 z-50">
					{/* navbar top */}
					<div className="flex items-center lg:h-4 lg:inline">

						{/* Menu button */}
						<button onClick={openMenu} className={`
						mr-5 ${menuClass === 'open-menu' ? 'relative text-white' : ''}
						
						lg:hidden
						`}>
							<i id="menu-icon" className="fa-solid fa-bars fa-2xl"></i>
						</button>


						{/* Logo */}
						<a href="" className="
						text-3xl font-title tracking-tightest text-gray-650 
						float-left lg:text-4xl">Makeshop</a>

						<div className="ml-auto flex lg:hidden">
							<button onClick={toggleSearchBarView}>
								<i className="fa-solid fa-magnifying-glass fa-xl"></i>
							</button>
							<div className="border-gray-400 border-l mx-3"></div>
							<button>
								<i className="fa-solid fa-cart-shopping fa-xl"></i>
							</button>
						</div>
					</div>

					<div className="

					flex items-center justify-between 
					
					lg:relative 
					lg:w-[73%] 
					lg:ml-auto 
				
					">
						
						{/*search bar */}
						{true ? <form id="search-form" className="
						bg-white 
						border-2 
						mt-5 h-12 px-5 
						w-full
						flex items-center justify-between 
						rounded-full 
						focus-within:border-fuchsia-300 
						transition-all duration-300

						lg:w-[63%]
						lg:h-10	
						lg:m-0
					">
							<input className="
							h-full w-full outline-none 
							text-lg
							mr-4

							lg:text-sm
							" type="search" id="input-search" placeholder="Pesquise produtos e marcas" />
							<button>
								<i className="fa-solid fa-magnifying-glass fa-lg text-gray-500"></i>
							</button>
						</form> : <></>}

						<div className="hidden lg:flex w-[30%] bg-blue-500 justify-between">
							<div>dasjkdlaskd-654654</div>
							<div>dasjkdlaskd-654654</div>
							<div>dasjkdlaskd-654654</div>

						</div>
					</div>

					{/* Menu panel*/}
					<div id="menu" className={`
						shadow-2xl 
						z-40 
						block 
						absolute 
						top-0
						w-full 
						transition-all duration-500 
						${menuClass}
						
						lg:relative
						lg:h-6
						lg:open-menu
					
					
						`}>

						{/* close menu when user clicks outside menu area */}
						<div onClick={closeMenu} className="lg:hidden menu-disposer block relative bg-black bg-opacity-25 h-screen w-full"></div>

						{/* menu */}
						<section className="
							absolute 
							z-50
							hide-scrollbar 
							top-0 left-0 
							bg-white 
							overflow-y-auto 
							h-screen w-3/4 
							block 
							
							lg:block
							lg:py-4
							lg:bg-transparent
							lg:w-full
							lg:h-[fit-content]
							">

							{/* menu header */}
							<div className="
								bg-zinc-950 
								px-5 pt-16 pb-6 
								text-center 
								relative z-10

								lg:hidden
								">
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
							<ul className="
								-z-0 relative

								lg:flex
								lg:justify-center
								">
								{MENU_OPTIONS.map((menuOption: MenuOption) => {
									if (menuOption.loginRequired && !isLogged) {
										return <></>;
									}
									return menuOption.child;
								})}
							</ul>
						</section>

					</div>
				</nav>
			</header>
		</>
	);
}
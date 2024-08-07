import { useEffect, useRef, useState } from "react";
import { utils } from "../../utils/utils";
/* NAVBAR COMPONENTS */
import { MenuOptions } from "./components/MenuOptions";
import { Searchbar } from "./components/Searchbar";
import { MenuHeader } from "./components/MenuHeader";
import { MakeshopLogo } from "./components/MakeshopLogo";
import { NavbarBadges } from "./components/Badges";
import { CartBadge } from "./components/CartBadge";
/* METHODS */
import { userServices } from "../../services/user.services";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";

export function Navbar() {
	/* REFS */
	const navbarRef = useRef(null);
	/* STATES */
	let [showSearchBar, setSearchBarView] = useState(!utils.isSmallDevice());
	let [menuClass, setMenuClass] = useState('close-menu');
	let [isLoggedIn, setLoginState] = useState(false);
	let [navbarHeight, setHeight] = useState("00px");

	/* METHODS */
	function toggleSearchBarView() {
		setSearchBarView(!showSearchBar);
	}

	function openMenu() {
		setMenuClass('open-menu');
	}

	function closeMenu() {
		setMenuClass('close-menu');
	}

	function updateNavbarHeight() {
		const navbar = utils.getRefContent<HTMLElement>(navbarRef);
		const height = navbar.offsetHeight;
		setHeight(`${height}px`);
	}

	utils.onResizeScreen(() => {
		setSearchBarView(!utils.isSmallDevice());
	});

	useEffect(() => {
		userServices.hasAuthenticated()
			.then(hasAuth => {
				setLoginState(hasAuth);
			});

	}, [isLoggedIn]);

	useEffect(() => {
		updateNavbarHeight();

		utils.onResizeScreen(() => {
			updateNavbarHeight();
		})
	}, [navbarHeight]);

	return (
		<>
			<header ref={navbarRef} className={`fixed top-0 z-30 w-full`}>
				<nav className={`border-b-2 pt-4 pb-6 lg:pb-12 px-5 z-30  bg-zinc-50`}>

					{/* navbar top */}
					<div className="flex items-center md:h-4 md:inline md:float-left">
						{/* Menu button toggler - ONLY FOR MEDIUM DEVICES AND BELOW*/}
						<button onClick={openMenu}
							className={`
								mr-5 ${menuClass === 'open-menu' ? 'relative text-white' : ''}
								lg:hidden
						`}>
							<i id="menu-icon" className="fa-solid fa-bars fa-xl"></i>
						</button>

						{/* Logo */}
						<MakeshopLogo />

						<div className="ml-auto flex md:hidden">
							<button onClick={toggleSearchBarView}>
								<i className="fa-solid fa-magnifying-glass fa-xl"></i>
							</button>
							<div className="border-gray-400 border-l mx-3"></div>
							<button onClick={() => PageRouter.goTo(routes.cart)}>
								<CartBadge />
							</button>
						</div>

					</div>

					<div className="
						flex items-center justify-between 
						md:relative 
						md:w-[80%] 
						md:ml-auto 

					">
						{/*search bar */}
						{showSearchBar ? <Searchbar /> : <></>}
						{/* menu badges - ONLY FOR MEDIUM DEVICES AND ABOVE*/}
						<NavbarBadges isLoggedIn={isLoggedIn} />
					</div>

					{/* menu container*/}
					<div id="menu" className={`
						shadow-2xl 
					
						block 
						absolute 
						top-0
						w-full 
						transition-all duration-700 
						${menuClass}
						
						lg:top-14
						lg:h-6	
						lg:open-menu				
						`}>

						{/* menu shade - ONLY FOR SMALL DEVICES AND BELOW*/}
						<div onClick={closeMenu}
							className="
							lg:hidden 
							menu-disposer 
							block relative 
							bg-black bg-opacity-25 
							h-screen w-full"></div>

						{/* menu */}
						<section className="
							absolute 
						
							hide-scrollbar 
							top-0 left-0 
							bg-white 
							overflow-y-auto 
							h-screen w-3/4 
							block 
							
							sm:w-3/5
							md:w-2/4

							lg:static
							lg:block
							lg:py-4
							lg:bg-transparent
							lg:w-full
							lg:h-[fit-content]
							
							">

							{/* menu header - ONLY FOR SMALL DEVICES AND BELOW*/}
							<MenuHeader isLoggedIn={isLoggedIn} />
							{/* Menu options*/}
							<ul className="					
								lg:flex
								lg:justify-center
								lg:w-[80%]
								lg:ml-[4%]
								">
								<MenuOptions isLoggedIn={isLoggedIn} />
							</ul>
						</section>

					</div>
				</nav>
			</header >

			<div className="w-full mb-3" style={{ height: `${navbarHeight}` }}></div>
		</>
	);
}
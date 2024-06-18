import { useState } from "react";
import { utils } from "../../utils/utils";
import { appColors } from "../../global/colors";
import { MenuOptions } from "./components/MenuOptions";

import { Searchbar } from "./components/Searchbar";
import { MenuHeader } from "./components/MenuHeader";
import { MakeshopLogo } from "./components/MakeshopLogo";
import { NavbarBadges } from "./components/Badges";
import { userServices } from "../../services/user.services";

export function Navbar() {
	let [showSearchBar, setSearchBarView] = useState(!utils.isSmallDevice());
	let [menuClass, setMenuClass] = useState('close-menu');

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

	utils.onResizeScreen(() => {
		setSearchBarView(!utils.isSmallDevice());
	});


	return (
		<>
			<header className={`fixed top-0 z-30 w-full`}>
				<nav className={`border-b-2 pt-4 pb-6 lg:pb-12 px-5 z-30 ${appColors.backgrounds.base}`}>

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
							<button>
								<i className="fa-solid fa-cart-shopping fa-xl"></i>
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
						<NavbarBadges />
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
							<MenuHeader />
							{/* Menu options*/}
							<ul className="					
								lg:flex
								lg:justify-center
								lg:w-[80%]
								lg:ml-[4%]
								">
								<MenuOptions isLoggedIn={userServices.hasAuthenticated()} />
							</ul>
						</section>

					</div>
				</nav>
			</header >
		</>
	);
}
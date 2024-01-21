import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import './navbar.css'
import NavbarButton from './NavbarButton'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Portfolio.</h3>
			<nav ref={navRef}>
        		<NavbarButton />
				<NavbarButton text="About"/>
				<NavbarButton text="Projects"/>
				<NavbarButton text="Skills"/>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
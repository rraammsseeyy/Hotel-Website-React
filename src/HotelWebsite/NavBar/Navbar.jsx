import React from 'react';
import "./NavBar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';

export default function Navbar() {
//     const navRef = useRef();

//     const showNavBar = () => {
//         navRef.current.classList.toggle("responsive_nav");
//     }
    
//   return (
//     <header>
//         <a class="logo" href="index.html">Logo</a>
//         <nav class="nav-bar" ref={navRef}>
           
            
//             <ul class="nav-list">
//                 <li> <a class="nav-link" href="index.html">Home</a> </li>
//                 <li> <a class="nav-link" href="#">About Us</a> </li>
//                 <li> <a class="nav-link" href="#">Contact Us</a> </li>
//                 <li> <a class="nav-link" href="#">Blog</a> </li>
//                 <li> <a class="nav-link" href="#">Services</a> </li>
//                 <button class="nav-btn nav-close-btn" onClick={showNavBar}>
//                     <FaTimes />
//                 </button>
//             </ul>
//             <button> BOOK NOW</button>
//         </nav>
        
//         <button class="nav-btn" onClick={showNavBar}>
//             <FaBars />
//         </button>
//     </header>
//   )

const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
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

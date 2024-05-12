import { useRef } from "react";
import { Fabars , Fatimes } from "react-icons/fa";
import "../styles/main2.css";

function  Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return( 
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My Work</a>
                <a href="/#">Blog</a>
                <a href="/#">About Us</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <Fatimes/>
                </button>           
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <Fabars/>
            </button>
        </header>
    );
}

export default Navbar;
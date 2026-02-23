import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ brand = "DevMarket" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#111",
        color: "#fff",
        position: "relative"
    };

    const brandStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#fff",
        textDecoration: "none"
    };

    const menuStyle = {
        display: "flex",
        gap: "1.5rem",
        listStyle: "none",
        margin: 0,
        padding: 0
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "color 0.3s"
    };

    const hamburgerStyle = {
        display: "none",
        flexDirection: "column",
        gap: "5px",
        cursor: "pointer",
        padding: "5px"
    };

    const barStyle = {
        width: "25px",
        height: "3px",
        backgroundColor: "#fff",
        transition: "0.3s"
    };

    // Responsive styles
    const responsiveStyles = `
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: #111;
                padding: 1rem;
                gap: 1rem;
            }
            .nav-menu.active {
                display: flex;
            }
            .hamburger {
                display: flex;
            }
        }
    `;

    return (
        <>
            <style>{responsiveStyles}</style>
            <nav style={navStyle}>
                <Link to="/" style={brandStyle}>{brand}</Link>
                
                <div 
                    className="hamburger" 
                    style={hamburgerStyle}
                    onClick={toggleMenu}
                >
                    <span style={barStyle}></span>
                    <span style={barStyle}></span>
                    <span style={barStyle}></span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} style={menuStyle}>
                    <li>
                        <Link to="/" style={linkStyle}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/products" style={linkStyle}>Productos</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={linkStyle}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

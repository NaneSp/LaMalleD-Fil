import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/" className="navigation__link-home">Accueil</NavLink>
            <NavLink to="/About" className="navigation__link-about">A Propos</NavLink>
            <NavLink to="/contact" className="navigation__link-contact">Contact</NavLink>
        </div>
    );
};

export default Navigation;
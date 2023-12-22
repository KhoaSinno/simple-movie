import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header flex items-center justify-center gap-x-5 text-white py-7 font-bold text-lg mb-5 select-none">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary' : '')}>Home</NavLink>
            <NavLink to='/movie' className={({ isActive }) => (isActive ? 'text-primary' : '')}>Movies</NavLink>
        </header>
    );
};

export default Header;
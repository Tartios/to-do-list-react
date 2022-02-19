import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <nav className="nav">
            <NavLink to="/" exact className="nav__nav-link" activeClassName="nav__nav-link_active">Мои дела</NavLink>
            <NavLink to="/completed" className="nav__nav-link" activeClassName="nav__nav-link_active">Завершенные</NavLink>
        </nav>
    )
}
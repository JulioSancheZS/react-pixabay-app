import React, { createRef } from 'react'
import { NavLink, Link } from 'react-router-dom'

const menu = createRef();
const toggleMenu = () => menu.current.classList.toggle('is-active');

const Nav = () => (
    
    <nav className="navbar is-success"  role="navigation" aria-label="main navigation">
        <div className="navbar-brand"> 
            <Link to="/" className="navbar-item">
                <h1 className="is-size-4">React Pixabay</h1>
            </Link>
        
            <a role="button" className="navbar-burger" ref={menu} onClick={() => toggleMenu()} aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

            <div className="navbar-menu" ref={menu}>
                <div className="navbar-end">
                    <NavLink exact to="/" className="navbar-item" activeClassName="activo">Inicio</NavLink>
                    <NavLink to="/sobre" className="navbar-item" activeClassName="activo">Sobre</NavLink>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav 
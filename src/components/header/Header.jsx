import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = props => (
    <ul>
        <li>
        <NavLink className="navLink" activeClassName="is-active" to="/" exact>Home</NavLink>
        <NavLink className="navLink" activeClassName="is-active" to="/Signup" exact>Signup</NavLink>
        </li>
    </ul>
)
export default Header;
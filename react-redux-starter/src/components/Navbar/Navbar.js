import React from 'react';
import {NavLink} from 'react-router-dom';

import './navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;

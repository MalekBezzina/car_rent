import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { ButtonSignup } from './ButtonSignup';
import { ButtonLogin } from './ButtonLogin';

import './NavBar.css';
function NavBar() {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMenu = () => setClick(false);
const showButton =() =>{
    if (window.innerWidth<=960){
        setButton(false);
    }else{
        setButton(true);
    }
};

useEffect(() =>{
    showButton()
}, []);
window.addEventListener('resize',showButton);
return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                     <Link to='/' className='navbar-logo' onClick={closeMenu}>
                         SiteName 
                     </Link>
                     <div className='menu-icon' onClick={handleClick}>
                         <i class={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                     </div>
                     
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                     <li className='nav-item'>
                             <Link to='/' className='nav-links' onClick={closeMenu}>
                                 Home
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/About' className='nav-links' onClick={closeMenu}>
                                 About 
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/Contact' className='nav-links' onClick={closeMenu}>
                                 Contact                              
                            </Link>
                         </li>
                         
                         <li className='nav-item'>
                             <Link to='/Login' className='nav-links' onClick={closeMenu}>
                                 Login
                             </Link>
                         </li>
                         
                         <li className='nav-item'>
                             <Link to='/Signup' className='nav-links-mobile' onClick={closeMenu}>
                                 Sign Up
                             </Link>
                         </li>
                     </ul>

                     {button && <ButtonSignup buttonStyle='btn--outline'>SIGN IN </ButtonSignup>}


                
                     </div>
            </nav>
        </>
    )
}

export default NavBar
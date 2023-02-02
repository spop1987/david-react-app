import React from 'react'

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';


import './Navbar.css';

const Navbar = () =>{

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return(
        <nav className='app__navbar'>
           <div className='app__navbar-logo'>
               <a href="#home"  alt='David Max Rivillo logo'>
                   <h1>David Max Rivillo</h1>
               </a>
           </div>
           <ul className='app__navbar-links'>
               <li className='p__opensans'><a href="#home">Home</a></li>
               <li className='p__opensans'><a href="#about">About me</a></li>
               <li className='p__opensans'><a href="#intro">Intro</a></li>
               <li className='p__opensans'><a href="#gallery">Gallery</a></li>
               <li className='p__opensans'><a href="#contactUs">Contact</a></li>
           </ul>
           <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' className='overlay__open' fontSize={40} onClick={() => setToggleMenu(true)}/>
                
                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay'>
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
                        <ul className='app__navbar-smallscreen-links'>
                        <li className='p__opensans'><a href="#home" onClick={() => setToggleMenu(false)} >Home</a></li>
                        <li className='p__opensans'><a href="#about" onClick={() => setToggleMenu(false)} >About me</a></li>
                        <li className='p__opensans'><a href="#intro" onClick={() => setToggleMenu(false)}>Intro</a></li>
                        <li className='p__opensans'><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
                        <li className='p__opensans'><a href="#contactUs" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )} 

           </div>
        </nav>
    );
};

export default Navbar;
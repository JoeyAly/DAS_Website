import React, {useState, useEffect} from 'react'
import{FaBars, FaTimes} from  'react-icons/fa';
import { IconContext} from 'react-icons/lib'
import { Button} from '../../globalStyles';
import { Link } from 'react-router-dom';
import './Navbar.css';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
    } from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    }
   
useEffect(() => {
    showButton()
}, [])

window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        DAS

                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onCLick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>                   
                        
                        <Link
                            to='/hoursCompleted'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Hours Completed
                        </Link>
                                         
                        
                        <Link
                            to='/userForms'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Reporting Form
                        </Link>
                      
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
                   
                    </NavMenu>
                </NavbarContainer> 
 
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;

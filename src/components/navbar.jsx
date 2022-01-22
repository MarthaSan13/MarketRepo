import React, { Fragment } from 'react';
import logo from '../logo.svg';
import CartWidget from  './cartwidget';

const Navbar = () => {
        const CustomStyle= {
            backgroundColor: "gray",
            padding: 20,
            color: "white",
            fontSize: "25px"
        }       

        return(
            <Fragment>
                <navbar className='navlist'>
                    <ul>
                        <img src={logo} className="App-logo" alt="logo" />
                        <li>Home</li>
                        <li>Productos</li>
                        <li>Destacados</li>
                        <li>Tu cuenta</li>
                        <CartWidget></CartWidget>
                    </ul>                    
                </navbar>    
                        
            </Fragment>
        )
    
}


export default Navbar;


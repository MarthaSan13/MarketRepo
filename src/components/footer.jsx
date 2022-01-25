import React, { Fragment } from 'react';

const Footer = (props) => {  
        return(
            <Fragment>
            <div className='footer'>{props.mensaje}</div>          
            </Fragment>
        )    
}


export default Footer;
//module.export= Footer;

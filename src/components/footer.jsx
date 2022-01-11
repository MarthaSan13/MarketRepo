import React, { Fragment } from 'react';

const Footer = (props) => {
        const CustomStyle= {
            backgroundColor: "black",
            padding: 20,
            color: "white",
            fontSize: "20px"
        }

        return(
            <Fragment>
            <div style={CustomStyle}>{props.mensaje}</div>          
            </Fragment>
        )
    
}


export default Footer;
//module.export= Footer;

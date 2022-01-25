import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

const Item = ({ productId, productTitle, productDescription, productPrice, productPictureUrl, productStock }) => {

    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
        if (qty <= productStock) {
            setItemsQty(qty)
        }
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }

    return(
        <Fragment>
            <div className='item'>
                {productTitle} 
                <div>Id: {productId}</div> 
                <div>Stock: {productStock}</div>
                <div>Descripción: {productDescription}</div>
                <div>Precio: {productPrice}</div>
                <div>Imagen: {productPictureUrl}</div> 

                    <div className=''>                       
                        <Button onClick={ () => removeFromStock (itemsQty - 1) } variant="primary"><FontAwesomeIcon icon={faMinus}/> </Button>{' '}
                        <span style={{ padding: 20, fontSize: "2em" }}>{itemsQty}</span>
                        <Button onClick={ () => setRealStock (itemsQty + 1) } variant="primary"><FontAwesomeIcon icon={faPlus}/></Button>{' '}
                    </div>
            </div>
            
        </Fragment>
    )
    
}

export default Item;


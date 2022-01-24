import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

const ItemCount = () => {
        const [itemsQty, setItemsQty] =useState(0);
        return(
            <Fragment>
                <div className='itemList'>
                    <h3>Item 1</h3>   
                    <Button onClick={ () => setItemsQty (itemsQty - 1) } variant="primary"><FontAwesomeIcon icon={faMinus}/> </Button>{' '}
                    <span style={{ padding: 20, fontSize: "2em" }}>{itemsQty}</span>
                    <Button onClick={ () => setItemsQty (itemsQty + 1) } variant="primary"><FontAwesomeIcon icon={faPlus}/></Button>{' '}
                </div>
            </Fragment>
        )
    
}

export default ItemCount;


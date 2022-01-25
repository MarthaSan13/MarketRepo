import React, { Fragment } from 'react';
//import ItemList from  './itemlist';
import ItemList from  './itemlist';

const ItemListContainer = () => {

        return(
            <Fragment>
                <div className='itemListContainer'>
                    <h3 className='itemListTitle'>Lista de productos</h3>  
                    <ItemList/> 
                </div>
            </Fragment>
        )
    
}

export default ItemListContainer;


import React, { Fragment } from 'react';
import { useState } from 'react';
import Item from  './item';

const ItemList = () => {

    const[products, setProducts] = useState([
        {id: "101", title: "Aceite de coco", description: "Producto 100% orgánico", price: "10Uds", pictureUrl: "lalalala", stock: 5 },
        {id: "102", title: "Miel de abejas", description: "Producto 100% orgánico", price: "5Uds", pictureUrl: "lalalala", stock: 10 },
        {id: "103", title: "Quinua", description: "Molida, Producto orgánico ", price: "3Uds", pictureUrl: "lalalala", stock: 8 },
        {id: "104", title: "Moringa", description: "En polvo, Producto orgánico", price: "4Uds", pictureUrl: "lalalala", stock: 5 }
    ])

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([products]);
        }, 3000);
    });

    promise.then((value) => console.log(value))
    .catch((err) => console.log("Error"))
    .finally((done) => console.log("Hecho"));
    

    return(
        <Fragment>
            <div className='itemsList'>
                 {products.map(product => {
                     return <Item productId={product.id} productTitle={product.title} productDescription={product.description} productPrice={product.price} productPictureUrl={product.pictureUrl} productStock={product.stock}/>
                 })}
            </div>
        </Fragment>
    )
    
}

export default ItemList;


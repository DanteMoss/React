import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount';
import "./style.css"
import { useState } from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const ItemDetail = ({ detail }) => {
    const [quantity, setQuantity] = useState(0)

    const { addProduct } = useContext(Shop)

    const OnAdd = (cantidad) => {
        console.log(`se agrego la cantidad de productos: ${cantidad}`);
        setQuantity(cantidad)
        addProduct({ ...detail, quantity: cantidad })
    }

    return (
        <>
            <div className='detail-container'>


                <div className="card" style={{ width: '30rem' }}>
                    <img src={detail.img} className="card-img-top" alt={`id-${detail.id}`} />
                    <div className="card-body">
                    <h5 className="detail-text">{detail.title}</h5>
                        <p className="detail-text">{detail.price} ETH</p>
                    </div>
                    </div>
                    {
                    quantity === 0 ?
                        <div>
                            <div className="item-count-container">
                                <ItemCount stock={20} initial={1} onAdd={OnAdd} />
                            </div>
                            <div className="cart-btn-container">
                                <Link to={"/cart"} className="btn btn-primary cart-btn btn-lg ">Go Cart</Link>
                            </div>
                        </div>
                        :
                        <Link to={"/cart"} className="btn btn-primary cart-btn btn-lg ">Go Cart</Link>
                }
            
                </div>

                
            
            


        </>


    )

}

export default ItemDetail


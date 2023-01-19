import React from 'react'
import { Link} from 'react-router-dom'
import ItemCount from '../ItemCount';
import "./style.css"
import { useState } from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const ItemDetail = ({ detail }) => {
    const [quantity, setQuantity] = useState(0)

    const {addProduct} = useContext(Shop)

    const OnAdd = (cantidad) => {
        console.log(`se agrego la cantidad de productos: ${cantidad}`);
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }
        
    return (
        <div className='detail-container'>
            

                <div className="card zoomable" style={{ width: '18rem' }}>
                    <img src={detail.img} className="card-img-top" alt={`id-${detail.id}`} />
                    <div className="card-body">
                        <h5 className="card-title">{detail.title}</h5>
                        <p className="card-text">{detail.price} ETH</p>
                        <Link to={`/detail/${detail.id}`} className="btn btn-primary btn-card">Details</Link>
                    
                    {
                            quantity === 0 ?
                            <ItemCount
                            stock={20}
                            initial = {1}
                            onAdd = {OnAdd}
                            />
                            :
                            <button className="btn btn-primary p-2">
                            <Link to="/cart">
                                Go cart
                            </Link>
                        </button>
                        }
                    </div>
                </div>
            

        </div>
    )
}

export default ItemDetail
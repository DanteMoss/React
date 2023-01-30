import React, { useContext } from 'react'

import { Shop } from '../../context/ShopProvider';
import "./style.css"

const TableRow = ({product}) => {
    const { cleanCart } = useContext(Shop);

    const handleRemove = () => {
        cleanCart(product.id);
    }
    return (
    <tr>
            <th className='col-color' scope="row">{product.id}</th>
            <td className='col-color'><img src={product.img} alt="table-row" style={{height: 150}}/></td>
            <td className='col-color'>{product.title}</td>
            <td className='col-color'>{product.price} ETH</td>
            <td className='col-color'>{product.quantity}</td>
            <td className='col-color'><button className='btn btn-danger' onClick={handleRemove}>Remove</button></td>
    </tr>
    )
}



export default TableRow
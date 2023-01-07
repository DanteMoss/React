import React from "react";
import './style.css';
import CartWidget from '../CartWidget'
import { Link } from "react-router-dom";


export default function NavBar() {

    return (
    <div>
        <h2 className="logo"><Link to="/">FreshNFT</Link></h2>
        <nav>
            <ul>
                <li><Link to="/category/Kanpai Pandas">Kanpai Pandas Collection</Link></li>
                <li><Link to="/category/CryptoPunk">CryptoPunk Collection</Link></li>
                <li><Link to="/category/Lil Pudgy">Lil Pudgy</Link></li>
                <li><Link to="/category/3Landers">3Landers</Link></li>
            </ul>
            <div className="widget-container">
            <CartWidget/>
            </div>
        </nav>
    </div>
    );
}
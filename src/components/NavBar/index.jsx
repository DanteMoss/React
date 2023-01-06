import React from "react";
import './style.css';
import CartWidget from '../CartWidget'
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <ul className="nav-list navbar-dark bg-dark">
            <li className="nav-item">
                <Link to="/">FreshNFT</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/Kanpai Pandas">Kanpai Pandas Collection</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/CryptoPunk">CryptoPunk Collection</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/Lil Pudgy">Lil Pudgy</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/3Landers">3Landers</Link>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
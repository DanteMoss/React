import React, { useState } from "react";
import "./style.css";

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container">
            <button className="btn btn-primary p-2 btn-lg" onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button className="btn btn-primary p-2 btn-lg" onClick={onPlus}>+</button>
            <div className="confirm-purchase-container">
            <button className="btn btn-primary p-2 btn-lg" onClick={() => onAdd(count)}>Confirm purchase</button>
            </div>
        </div>
    );
};

export default ItemCount;


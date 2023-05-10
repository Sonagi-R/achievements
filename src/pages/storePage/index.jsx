import { useState, useEffect } from 'react';
import React from 'react'
import './index.css'

export default function storePage() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await fetch(`http://localhost:4000/items`, {credentials: "include"});
        const data = await response.json();
        console.log(data);

        setItems(data);
    }
  return (
    <div>
        <h1>Store Page</h1>
        <div className='store-container'>
        {items.map(item => (
        <div className="card p-0 store-card " style={{ width: "18rem" }}>
            <img className="card-img-top" src={item.item_icon} alt="store image" />
            <div className="card-body">
                <h5 className="card-title">{item.item_name}</h5>
                <p className="card-text">
                    Price: {item.price}
                </p>
                <button>
                    Buy Now
                </button>
            </div>
        </div> 
        ))}
        </div>
    </div>
  )
}

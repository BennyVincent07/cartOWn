import React from 'react'
import './CartView.css'
export const CartView =(props) =>(
    
    <div className='cartView'>  
        <nav>
            <h1>ShopZone</h1>
            <aside >
            <button id="cartButton" onClick={props.click}>
            {props.page ==='ProductPage'?'CART':'BACK'}</button>
        </aside>
        </nav>
    </div>
)
export const ProductTable = () =>(
    <thead>
          <tr>
        <th > Item Id</th>
        <th>Item Name</th>    
        <th>Price</th>
        <th>Add</th>
        <th>Decrement</th>
        <th>Quantity</th>
        </tr>
        </thead>
)
export const ProductDisplay =(props) => {
    return(
        <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td><button id="button" onClick={props.add}>+</button></td>
    <td><button id="button" onClick={props.remove}>-</button></td>
    <td>{props.quantity}</td>
    </tr>
)}

export const CartTable = () =>(
    <thead>
          <tr>
        <th > Item Id</th>
        <th>Item Name</th>    
        <th>Price</th>
        <th>Add</th>
        <th>Decrement</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Remove</th>
        </tr>
        </thead>
)
export const CartDisplay =(props) => {
    return(
        <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td><button id="button" onClick={props.add}>+</button></td>
    <td><button id="button" onClick={props.remove}>-</button></td>
    <td>{props.quantity}</td>
    <td>{props.quantity*props.price}</td>
    <td><button id="button" onClick={props.delete}>X</button></td>
    </tr>
    )}
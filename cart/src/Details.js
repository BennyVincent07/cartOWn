import React from 'react'
const itemDetails =(props) => {
    return(
        <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td><button id="button" onClick={props.add}>+</button></td>
    <td><button id="button" onClick={props.remove}>-</button></td>
    <td>{props.quantity}</td>
    <td>{props.price*props.quantity}</td>
    </tr>
)}
export default itemDetails
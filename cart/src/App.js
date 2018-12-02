import React, { Component } from 'react';
import './App.css';
import {CartView} from './CartView'
import {ProductTable} from './CartView'
import {CartTable} from './CartView'
import Items from './Products'
import {ProductDisplay} from './CartView'
import {CartDisplay} from './CartView'
class App extends Component {
  state={
    Products:Items,
    page:'ProductPage'
  }
  addProduct = (id) => {
   const [product] =this.state.Products.filter(
     item => item.id === id
   )
   product.quantity++;
   this.setState({
     Products:this.state.Products
   })
  }
  removeProduct  = (id) => {
    const [product] =this.state.Products.filter(
      item => item.id === id
    )
    if(product.quantity>0)
    product.quantity--;
    if(product.quantity===0 && this.state.page ==='CartPage')
      this.deleteProduct(id)
    this.setState({
      Products:this.state.Products
    })
  }
  deleteProduct  = (id) => {
    const [product] =this.state.Products.filter(
      item => item.id === id
    )
    product.quantity=0;
    this.setState({
      Products:this.state.Products
    })
  }
  pageHandler =() =>{
    const page= this.state.page === 'ProductPage'? 'CartPage' :'ProductPage'
    this.setState({
      page
    })
  }
 ProductPage = () => {
    return (
      <div className="App">
        <CartView click={this.pageHandler} page={this.state.page}></CartView>
        <table id="customers">
        <ProductTable/>
        <tbody>
        {this.state.Products.map(product => (
          <ProductDisplay key={product.id} {...product} add={this.addProduct.bind(null,product.id)}
           remove={this.removeProduct.bind(null,product.id)}></ProductDisplay>
        ))
        }
        </tbody>
        </table>
       </div>
    );
  }
   CartPage = () => {
    const [product]=this.state.Products.filter(product=>product.quantity>0)
    if(product) {
    return(
    <div className="App">
        <CartView page={this.state.page} click={this.pageHandler}></CartView>
        <table id="customers">
        <CartTable/>
        <tbody>
        {this.state.Products.map(product => (
           product.quantity>0 &&
          <CartDisplay key={product.id} {...product} add={this.addProduct.bind(null,product.id)}
           remove={this.removeProduct.bind(null,product.id)} 
           delete={this.deleteProduct.bind(null,product.id)}></CartDisplay>
        ))
        }
          </tbody>
        </table>
        <p id="para">Total Amount:
        {this.state.Products.reduce((total,{price,quantity})=>(total+price*quantity),0)}</p>
    </div>
    )}
    else {
      return (
      <div className="App">
        <CartView page={this.state.page} click={this.pageHandler}></CartView>
        <div id="empty">
        <p >EMPTY CART!!!   
        <button id ="link" href='#' onClick={this.pageHandler}>Click Here To Shop</button>
        </p>
        </div>
      </div>
      )}
    }
  render() {
    return this.state.page === 'ProductPage' ? this.ProductPage() : this.CartPage()
  }
}

export default App;

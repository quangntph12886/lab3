import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {currency} from "../../helper.js";
import cartSlice from "./cartSlice.js";

const Cart = () => {
  const {cart,total} = useSelector(store => store.cart)
  console.log(total);
  const dispatch = useDispatch()

  const increase = (item) => {
    dispatch({
      type:"cart/add",
      payload:item
    })
  }
  const decrease = (id) =>{
    dispatch({
      type:"cart/decrease",
      payload:id
    })
  }
  console.log(cart);
  return (
    <div className='cart-container'>
      <h3>Cart</h3>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div style={{display: "flex"}}>
            <h4>{item.name}</h4>
            <img style={{width: "20%"}} src={item.image} alt="" />
            <div>
              <button  onClick={() => decrease(item.id)}>-</button>
              <input type="number" value={item.amount || 1}/>
              <button onClick={() => increase(item)}>+</button>
            </div>
          </div>
          <p>{currency(item.amount* item.saleOffPrice)}</p>
        </div>
      ))}
      <div className="total">
        <div>Total</div>
        <h2>{total}</h2>
      </div>
    </div>
  )
}

export default Cart
import React from "react"
import { useDispatch } from "react-redux"
import {currency} from "../../helper.js";
import { useSelector } from "react-redux";
const Product = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state =>state.cart)
  const addToCart = (product) => {
    dispatch({
      type: "cart/add",
      payload: {...product,amount:1}
      
    })
  }
  return (
    <div className='product-container'>
      <h3>Product</h3>
      {products?.map(item => (
        <div className="product-item" onClick={() => addToCart(item)}>
          <h4>{item.name}</h4>
          <div>{currency(item.saleOffPrice)}</div>
          <img style={{ width: "50%" }} src={item.image} />
        </div>
      ))}
    </div>
  )
}

export default Product
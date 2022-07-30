import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './components/product'
import Cart from './components/cart'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const fetchProduct = async function() {
    const data = await(await fetch('https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products')).json()
    dispatch({
      type: "cart/store",
      payload: data
    })
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div>
      <Product />
      <Cart/>
    </div>
  )
}

export default App

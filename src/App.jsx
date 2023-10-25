import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchProducts from './util/api.js'
import { Snackbar } from '@mui/material'

function App() {
  const PRODUCTS_COUNT = 12
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await fetchProducts(PRODUCTS_COUNT))
    }
    getProducts()
  }, [])

  const addToCart = (item) => {
    const cartLength = cartItems.length === 0
    const duplicate = cartItems.some((obj) => obj.product.id === item.id)

    if (cartLength) {
      setCartItems((items) => [...items, { product: item, count: 1 }])
    }
    if (!cartLength && !duplicate) {
      setCartItems((items) => [...items, { product: item, count: 1 }])
    }
    if (!cartLength && duplicate) {
      const updatedCart = cartItems.map((obj) => {
        if (obj.product.id === item.id) {
          return { ...obj, count: obj.count + 1 }
        }
        return obj
      })
      setCartItems(updatedCart)
    }
  }

  const removeFromCart = (item) => {
    const updatedCart = cartItems.map((obj) => {
      if (obj.product.id === item.id && obj.count > 1) {
        return { ...obj, count: obj.count - 1 }
      }
      return obj
    })
    setCartItems(updatedCart)

    cartItems.map((obj) => {
      if (obj.product.id === item.id && obj.count <= 1) {
        const index = cartItems.indexOf(obj)
        const copy = [...cartItems]
        copy.splice(index, 1)
        setCartItems(copy)
      }
    })
  }

  const checkout = () => {
    setCartItems([])
    setOpen(true)
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet
        context={[cartItems, checkout, removeFromCart, addToCart, products]}
      />
      <Footer />
      <Snackbar
        message="Order Placed!"
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </>
  )
}

export default App

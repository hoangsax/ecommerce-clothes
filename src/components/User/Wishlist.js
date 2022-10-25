import React from 'react'
import Product from '../ProductsPage/Product'

const Wishlist = (props) => {
  return (
    <>
      {props.wishlist.map((product) => {
        return (
          <Product display={1} product={product}/>
        )
      })}
    </>
  )
}

export default Wishlist
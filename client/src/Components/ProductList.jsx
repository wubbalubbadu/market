import React from 'react'
import Product from './Product'
import {Box, styled} from '@mui/material'

//this styled div should also take care of grid styling 
//to make each card responsive to screen sizes
const Wrapperstyle = styled('div')({
  backgroundColor: "blue",
  padding: 2,
  display: 'inline-flex',
})

function ProductList(props) {

  const {products} = props //deconstruction 

  return (
    <Wrapperstyle>
      {/* map each of the product into a Product component */}
      {products.map( product => {
<<<<<<< HEAD
        return <Product product={product}/>
=======
        return <Product key={product._id} product={product}/>
>>>>>>> main
      })}
    </Wrapperstyle>
  )
}

export default ProductList
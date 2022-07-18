import React from 'react'
import Product from './Product'
import {Box, styled} from '@mui/material'

//this styled div should also take care of grid styling 
//to make each card responsive to screen sizes
const Wrapperstyle = {
  backgroundColor: "blue",
  padding: 2,
}

function ProductList(props) {
  console.log('component!', props)

  const {products} = props //deconstruction 

  return (
    <Box sx={Wrapperstyle}>
      {/* map each of the product into a Product component */}
      {products.map( product => {
        return <Product product={product}/>
      })}
    </Box>
  )
}

export default ProductList
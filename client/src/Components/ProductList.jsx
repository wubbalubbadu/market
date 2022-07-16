import React from 'react'
import Product from './Product'
import {Box, styled} from '@mui/material'

//this styled div should also take care of grid styling 
//to make each card responsive to screen sizes
const Wrapper = styled('div')({
  backgroundColor: "blue",
})


function ProductList( products) {

  return (
    <Wrapper>
      {/* map each of the product into a Product component */}
      {products.map( product => {
        return <Product product={product}/>
      })}
    </Wrapper>
  )
}

export default ProductList
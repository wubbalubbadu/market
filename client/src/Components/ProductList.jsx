import React from 'react'
import {Box, styled} from '@mui/material'


const Wrapper = styled(Box)(({theme}) => ({
    backgroundColor: "purple"
}));

function ProductList() {
  return (
    <Wrapper>
        Product List
    </Wrapper>
  )
}

export default ProductList
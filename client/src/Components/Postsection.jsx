import React from 'react'
import {theme} from "../themes/Theme";
import ProductList from './ProductList';

import { Box, styled, Typography } from '@mui/material';

const SearchBar=styled("div")(({theme}) => ({
  backgroundColor:"white",
}))



function PostSection() {
  return (
    <Box bgcolor="pink" flex={2} padding={2}>
      <SearchBar>Search</SearchBar>
      <ProductList>
        Product List
      </ProductList>
   </Box>
  )
}

const sampleProducts = [
  {
    title: "Hotpot Cooker",
    price: 50,
    description: "Amazing Hotpot Cooker at your hand, get it with 50 bucks and you can enjoy hotpot in your own kitchen!",
    images: "src for now",
    category: "cooking",
    condition: "brandnew",
    checked: "True",
    seller: "userid1-juliachu",
  },
  {
    title: "Iron Curler",
    price: 100,
    description: "want the perfect curl? this is what you need",
    images: "src for now",
    category: "makeup",
    condition: "used",
    checked: "True",
    seller: "userid2-hayliewu",
  },
]

export default PostSection
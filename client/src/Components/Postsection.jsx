import React, {useState, useContext} from 'react'
import {theme} from "../themes/Theme";
import ProductList from './ProductList';
//import { GlobalState } from '../GlobalState'
import { Box, styled } from '@mui/material';

const SearchBar=styled("div")({
  backgroundColor:"white",
})


function PostSection() {
  //const state = useContext(GlobalState)
  //const [products] = state.productsAPI.products
  const [products, setProducts] = useState(SAMPLE_PRODUCTS)
  console.log("testing",products)

  return (
    <Box bgcolor="pink" flex={2} padding={2}>
      <SearchBar>Search</SearchBar>

      <ProductList products={products} />  
      {/* passing in sample products into ProductList component */}
      
   </Box>
  )
}

const SAMPLE_PRODUCTS = [
  {
    title: "Hotpot Cooker",
    price: 50,
    description: "Amazing Hotpot Cooker at your hand, get it with 50 bucks and you can enjoy hotpot in your own kitchen!",
    images: {
      "public_id": "test/rsltmafcyek9v4fm7oid",
      "url": "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg"
    },
    category: "cooking",
    condition: "used",
    checked: "True",
    seller: "userid1-juliachu",
  },
  {
    title: "Iron Curler",
    price: 5,
    description: "want the perfect curl? this is what you need",
    images: {
      "public_id": "test/rsltmafcyek9v4fm7oid",
      "url": "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg"
    },
    category: "Makeup",
    condition: "New",
    checked: "True",
    checked: "True",
    seller: "userid2-hayliewu",
}
]

export default PostSection
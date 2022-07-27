import React from 'react';
import axios from 'axios'

import { Box, Typography } from '@mui/material';

// http://localhost:5000/api/products?category=Furniture

const Sidebar  = ({ setProducts }) => {
  
  return (
    <Box 
      bgcolor="lightyellow"
      flex={0.25} 
      padding={2} 
      sx={{display:{xs:"none", sm:"block"} }} //when we in mobile view we dont display the sidebar
    >
      {categories.map((category)=> <Typography onClick={async () => {
        // console.log(category);
        const response = await axios.get('http://localhost:5000/api/products?category=' + category)
        setProducts(response.data.products);
      }}>{category}</Typography>)}
    </Box>
  )
}

export default Sidebar 

const categories = [
  "Apparel & Accessories",
  "Beauty & Personal Care ",
  "Home & Kitchen",
  "Furniture",
  "Office Supplies",
  "Toys & Games",
  "Exercise & Fitness",
  "Garden & Outdoor",
  "Pets & Pets Supplies",
  "Consumer Electronic Goods",
  "Books",
]
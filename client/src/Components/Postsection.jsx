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
      <ProductList/>
   </Box>
  )
}

export default PostSection
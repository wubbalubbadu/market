import React from 'react'
import Postsection from './Postsection';
import Sidebar from './Sidebar';
import axios from 'axios'
import {Box, Stack } from '@mui/material'


function HomeDisplay() {
  const [products, setProducts] = React.useState([]);
  
  React.useEffect(async () => {
    const response = await axios.get('http://localhost:5000/api/products')
    setProducts(response.data.products);
  }, [])

  return (
          
    <Box bgcolor="skyblue" padding={2}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar setProducts={setProducts} />
        <Postsection products={products} />
      </Stack>
    </Box>
  )

}

export default HomeDisplay
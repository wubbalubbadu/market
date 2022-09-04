import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import ProductList from '../Sell/ProductList';

function MyListings({ googleId }) {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios
      .get(`http://localhost:5000/api/products?googleId=${googleId}&limit=8`)
      .catch((err) => {
        console.log(err);
      });
    // we need the page turn thingy, this is only giving you the first 8.
    setProducts(response.data.products);
    console.log(products);
  };
  useEffect(() => {
    getProducts();
  }, [googleId]);

  return (
    <Box>
      <Typography>Click on each listing to update, edit, or delete posts</Typography>
      <div>
        <ProductList products={products} />
      </div>
    </Box>
  );
}

export default MyListings;
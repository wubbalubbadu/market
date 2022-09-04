import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import ProductList from '../Sell/ProductList';

function MyListings({ watchings }) {
  const [products, setProducts] = useState([]);
  /* eslint-disable */
  const getProducts = async () => {
    const promises = [];
    for (const productId of watchings) {
      const result = axios.get(`http://localhost:5000/api/products?_id=${productId}`);
      promises.push(result);
    }
    const results = await Promise.all(promises);
    setProducts(results.map((result) => result.data.products[0]));
    // how to deal with if the product is either checked, or deleted
    // rn i'm assuming every product in watchings is still available
    // page turn and get 8 products at a time.
  };
  /* eslint-enable */
  useEffect(() => {
    getProducts();
  }, [watchings]);

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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, styled, Grid, CircularProgress } from '@mui/material';
import ProductAccount from './ProductAccount';

// this styled div should also take care of grid styling
// to make each card responsive to screen sizes
const Wrapperstyle = styled('div')({
  backgroundColor: 'white',
  padding: 1,
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  marginRight: 0,
  paddingRight: 0.25,
});

function ProductListAccount(props) {
  const { products } = props; // deconstruction
  // console.log("print products", products);
  const loading = useSelector((state) => state.productsReducer.products.loading);

  return (
    <Wrapperstyle>
      <Grid
        container
        justifyContent={loading ? 'center' : 'flex-start'}
      >
        {loading ? <CircularProgress /> : products.map((product, i) => <ProductAccount product={product} key={i} />)}
      </Grid>
    </Wrapperstyle>
  );
}

export default ProductListAccount;
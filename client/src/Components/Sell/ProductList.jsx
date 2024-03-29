import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, Stack, Pagination, styled, CircularProgress } from '@mui/material';
import Product from './Product';
import { fetchProducts } from '../../redux/thunk/product';

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

function ProductList(props) {
  const { products } = props; // deconstruction
  // console.log("print products", products);
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.productsReducer.totalPages);
  const loading = useSelector((state) => state.productsReducer.products.loading);

  const onPageSelected = (event, value) => {
    dispatch(fetchProducts({ page: value }));
  };
  return (
    <Wrapperstyle>
      <Stack sx={{ width: '1400px' }}>
        <Grid
          container
          justifyContent={loading ? 'center' : 'flex-start'}
        >
          {loading ? <CircularProgress /> : products.map((product, i) => <Product product={product} key={i} />)}
        </Grid>
        <Divider sx={{ m: '12px' }} />
        <Grid container justifyContent="center">
          <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={onPageSelected} />
        </Grid>
      </Stack>
    </Wrapperstyle>
  );
}

export default ProductList;

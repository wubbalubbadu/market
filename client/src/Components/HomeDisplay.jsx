import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Stack } from '@mui/material';
import { fetchProducts } from '../redux/thunk/product';
import { fetchRequests } from '../redux/thunk/request';
import Postsection from './Postsection';
import Sidebar from './Sidebar/Sidebar';

function HomeDisplay() {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const requests = useSelector((state) => state.requestsReducer.requests);

  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

  return (
    <Box bgcolor="white" padding={2} sx={{ marginRight: 0, paddingRight: 0 }}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        {/* selectedTab={selectedTab}  */}
        <Postsection
          products={products}
          // selectedTab={selectedTab}
          // handleTabChange={handleTabChange}
          requests={requests}
        />
      </Stack>
    </Box>
  );
}

export default HomeDisplay;
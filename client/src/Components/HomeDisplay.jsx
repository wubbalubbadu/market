import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Stack } from '@mui/material';
import { getRequests } from '../redux/actions/requestsActions';
import Postsection from './Postsection';
import Sidebar from './Sidebar/Sidebar';
import { fetchProducts } from '../redux/thunk/product';

const SAMPLE_REQUESTS = [
  {
    _d: '62d1e1a0c7d7db1a43f44822',
    title: 'request test 1',
    description: 'Im test1',
    category: 'Clothing',
    user: '62cb3ceabaa89e2ae29be0f9',
    low_price: 500,
    high_price: 600,
    createdAt: '2022-07-15T21:52:32.094Z',
    updatedAt: '2022-07-15T21:52:32.094Z',
    __v: 0,
  },
  {
    _id: '62d1e1a0c7d7db1a47814',
    title: 'Request Test 2',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum qui',
    category: 'Clothing',
    user: '62cb3ceabaa89e2ae29be0f9',
    low_price: 20,
    high_price: 60,
    createdAt: '2022-12-15T21:52:32.094Z',
    updatedAt: '2022-12-16T00:52:32.094Z',
    __v: 0,
  },
];

function HomeDisplay() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const requests = useSelector((state) => state.requestsReducer.requests);
  const fetchRequests = async () => {
    const response = await axios
      .get('http://localhost:5000/api/requests')
      .catch((err) => {
        console.log(err);
      });
    dispatch(getRequests(response.data.requests));
  };

  useEffect(() => {
    fetchRequests();
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
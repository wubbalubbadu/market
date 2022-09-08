import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, Stack, Pagination, styled, CircularProgress } from '@mui/material';
import { fetchRequests } from '../../redux/thunk/request';

import Request from './Request';

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

function RequestList(props) {
  const { requests } = props; // deconstruction
  // console.log("printing requests", requests);
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.requestsReducer.totalPages);
  const loading = useSelector((state) => state.requestsReducer.requests.loading);

  const onPageSelected = (event, value) => {
    dispatch(fetchRequests({ page: value }));
  };
  return (
    <Wrapperstyle>
      {/* map each of the product into a Product component
      {requests.map((request) => <Request key={request._id} request={request} />)} */}
      <Stack sx={{ width: '1400px' }}>
        <Grid
          container
          justifyContent={loading ? 'center' : 'flex-start'}
        >
          {loading ? <CircularProgress /> : requests.map((request, i) => <Request key={request._id} request={request} />)}
        </Grid>
        <Divider sx={{ m: '12px' }} />
        <Grid container justifyContent="center">
          <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={onPageSelected} />
        </Grid>
      </Stack>
    </Wrapperstyle>
  );
}

export default RequestList;

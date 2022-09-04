import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import RequestList from '../Requests/RequestList';

function MyListings({ googleId }) {
  const [requests, setRequests] = useState([]);
  const getRequests = async () => {
    const response = await axios
      .get(`http://localhost:5000/api/requests?googleId=${googleId}&limit=8`)
      .catch((err) => {
        console.log(err);
      });
    // we need the page turn thingy, this is only giving you the first 8.
    setRequests(response.data.requests);
  };
  useEffect(() => {
    getRequests();
  }, [googleId]);

  return (
    <Box>
      <Typography>Click on each listing to update, edit, or delete posts</Typography>
      <div>
        <RequestList requests={requests} />
      </div>
    </Box>
  );
}

export default MyListings;
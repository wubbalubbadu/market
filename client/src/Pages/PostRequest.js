import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostHeader from '../Components/Postheader';
import Listings from '../Components/Listings';
import Requests from '../Components/Requests';

function PostRequest() {
  const user = JSON.parse(localStorage.getItem('profile'));

  const navigate = useNavigate();

  //  const categories = useSelector((state) => state.categories);
  //  console.log(categories)

  const [method, setMethod] = useState('Post Your Items');
  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  if (!user?.result?.name) {
    setTimeout(() => {
      navigate('/');
    }, 1000);
    return (
      <h1>please sign in</h1>
    );
  }

  return (
    <div>
      <Box>
        <Stack spacing={10}>

          <PostHeader method={method} handleMethodChange={handleMethodChange} key={1} />
          {method === 'Post Your Items' ? <Listings />

            : <Requests />}

        </Stack>

      </Box>
    </div>

  );
}

export default PostRequest;

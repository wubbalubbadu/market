import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import AccountSidebar from '../Components/Account/AccountSidebar';
import MyDetails from '../Components/Account/MyDetails';
import MyListings from '../Components/Account/MyListings';
import MyRequests from '../Components/Account/MyRequests';
import MyWatchings from '../Components/Account/MyWatchings';

function Account() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [method, setMethod] = useState('My Details');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [watchings, setWatchings] = useState([]);
  const { googleId } = user.result;

  const handleClick = (event) => {
    setMethod(event.currentTarget.value);
  };

  const getUserInfo = async () => {
    console.log(googleId);
    const response = await axios
      .get(`http://localhost:5000/user/userinfo?googleId=${googleId}`)
      .catch((err) => {
        console.log(err.response.data.message);
      });
    console.log(response.data);
    setName(response.data.name);
    setAvatar(response.data.avatar);
    setWatchings(response.data.loves);
  };

  /* eslint-disable */
  useEffect(() => {
    getUserInfo();
  }, []);
   /* eslint-enable */

  return (
    <div>
      <Box>
        <Navbar />
        <Box bgcolor="white" padding={2} sx={{ marginRight: 0, paddingRight: 0 }}>
          <AccountHeader name={name} />
          <Stack flexDirection="row" justifyContent="space-between" spacing={0}>
            <AccountSidebar handleClick={handleClick} />
            <MainDiv>
              <Box sx={{ border: 1, borderColor: 'black', borderRadius: '16px', width: '100%', height: '700px' }}>
                <Typography>{method.toUpperCase()}</Typography>
                {method === 'My Details' && <MyDetails name={name} avatar={avatar} />}
                {method === 'My Listings' && <MyListings googleId={googleId} />}
                {method === 'My Requests' && <MyRequests googleId={googleId} />}
                {method === 'My Watchings' && <MyWatchings watchings={watchings} />}
              </Box>
            </MainDiv>
          </Stack>
        </Box>
      </Box>

    </div>
  );
}

const MainDiv = styled.div`
  background: white;
  width: 60%;
  border-radius: 5px;
  max-height: 80%;
  flex: 2;
  padding: 2%;
  padding-right: 0.5%;
`;

function AccountHeader({ name }) {
  return (
    <div>
      <Typography>
        HELLO
        {' '}
        {name.toUpperCase()}
      </Typography>
      <Typography>
        This is your ACCOUNT!
      </Typography>
    </div>
  );
}
export default Account;

import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../Navbar';
import AccountSidebar from './AccountSidebar';
import MyDetails from './MyDetails';
import MyListings from './MyListings';
import MyRequests from './MyRequests';
import MyWatchings from './MyWatchings';

function AccountDisplay({ method, handleClick }) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [watchings, setWatchings] = useState([]);
  const { googleId } = user.result;

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
              <Box sx={{ border: 1, borderColor: 'black', borderRadius: '16px', width: '95%', height: '700px', paddingLeft: '28px', paddingTop: '28px' }}>
                <Typography fontFamily="Oswald" fontSize={22} fontWeight="500">{method.toUpperCase()}</Typography>
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
  margin-right: 20px;
  margin-left: 10px;
`;

function AccountHeader({ name }) {
  return (
    <Grid marginBottom={5} paddingLeft={2}>
      <Typography fontFamily="Oswald" fontSize={22} fontWeight={500}>
        HELLO
        &nbsp;
        {name.toUpperCase()}
      </Typography>
      <Typography fontFamily="Oswald" fontSize={22} fontWeight={500}>
        This is your ACCOUNT!
      </Typography>
    </Grid>
  );
}
export default AccountDisplay;

import React from 'react';

import HomeDisplay from '../Components/HomeDisplay.jsx';
import Navbar from '../Components/Navbar.jsx';
import {Box } from '@mui/material';



function Home() {
  return (
    <div>
      <Box >
        <Navbar key={1}/>
        <HomeDisplay/>
      </Box>

    </div>
  );
}

export default Home
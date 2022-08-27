import React from 'react';

import { Box } from '@mui/material';
import HomeDisplay from '../Components/HomeDisplay.jsx';
import Navbar from '../Components/Navbar.jsx';

function Home() {
  return (
    <div>
      <Box>
        <Navbar key={1} />
        <HomeDisplay />
      </Box>

    </div>
  );
}

export default Home;

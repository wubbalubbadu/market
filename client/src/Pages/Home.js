import React from 'react';

import Sidebar from '../Components/Sidebar.jsx';
import HomeDisplay from '../Components/HomeDisplay.jsx';

import { Stack, Box } from '@mui/material';



function Home() {
  return (
    <div>
      <Box>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar/>
          <HomeDisplay/>
        </Stack>

      </Box>

    </div>
  );
}

export default Home
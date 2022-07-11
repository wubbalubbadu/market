import React from 'react';

import Sidebar from '../Components/Sidebar.jsx';
import Post from '../Components/Post.jsx';
import Navbar from '../Components/Navbar.jsx';

import {ActionButton} from "../themes/ActionButton.js"
import { Stack, Box } from '@mui/material';


function Home() {
  return (
    <div>
      <Box>
        <Navbar/>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar/>
          <Post/>
        </Stack>

      </Box>

        <ActionButton> Home </ActionButton>


    </div>
  );
}

export default Home
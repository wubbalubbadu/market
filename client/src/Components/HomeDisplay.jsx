import React from 'react'
import Navbar from './Navbar';
import Post from './Post';

import {Box} from '@mui/material'


function HomeDisplay() {
  return (
    <Box bgcolor="skyblue" flex={2} padding={2}>
        <Navbar/>
        <Post/>
    </Box>
  )
}

export default HomeDisplay
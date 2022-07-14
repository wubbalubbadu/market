import React from 'react'
import Postsection from './Postsection';
import Sidebar from './Sidebar';

import {Box, Stack } from '@mui/material'


function HomeDisplay() {
  return (
          
    <Box bgcolor="skyblue" padding={2}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar/>
        <Postsection/>
      </Stack>
    </Box>
  )

}

export default HomeDisplay
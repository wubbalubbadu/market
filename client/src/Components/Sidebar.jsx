import React from 'react';

import { Box } from '@mui/material';



const Sidebar  = () => {
  return (
    <Box 
      bgcolor="lightyellow"
      flex={0.25} 
      padding={2} 
      sx={{display:{xs:"none", sm:"block"} }} //when we in mobile view we dont display the sidebar
    >
      SideBar
    </Box>
  )
}

export default Sidebar 
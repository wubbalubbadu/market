import React from 'react';
import {ActionButton} from "../themes/ActionButton.js"

import { Box } from '@mui/material';



const Sidebar  = () => {
  return (
    <Box 
      bgcolor="lightyellow"
      flex={0.5} 
      padding={2} 
      sx={{display:{xs:"none", sm:"block"} }} //when we in mobile view we dont display the sidebar
    >
      SideBar
      <ActionButton> Home </ActionButton>
    </Box>
  )
}

export default Sidebar 
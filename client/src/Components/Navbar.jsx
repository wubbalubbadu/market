import React from 'react'
import { Link } from "react-router-dom";
import {theme} from "../themes/Theme"

import Add from '@mui/icons-material/Add';
import { Box } from '@mui/material'
import {Typography,Button} from "@material-ui/core";
import {ThemeProvider } from "@material-ui/core/styles";


const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="skyblue">
        <Button 
            component={Link}
            to="/post_items"
            variant="contained" 
            color="primary" 
            startIcon={<Add />} 
          >  ADD POST
          </Button>

          <Button
            component={Link}
            to="/request_item"
            variant="contained" 
            color = "otherColor"
          >
            REQUEST ITEMS
          </Button>
      </Box>
    </ThemeProvider>
  )
}

export default Navbar
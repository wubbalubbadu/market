import React from 'react'

import { Link } from "react-router-dom";
import {theme} from "../themes/Theme"

import Add from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import {Typography,Button, styled, Toolbar } from '@mui/material'
import {ThemeProvider } from "@material-ui/core/styles";
// contains searchbar and Post Request button

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
});

function Navbar() {
  return (

    <ThemeProvider theme={theme}>
        <StyledToolbar>
                <Typography> NAV BAR DEV</Typography>
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
                    color="secondary"
                    startIcon={<CreateIcon/>}
                > REQUEST ITEMS
                </Button>
        </StyledToolbar>
    </ThemeProvider>
  )
}

export default Navbar
import React from 'react'

import { Link } from "react-router-dom";
import {theme} from "../themes/Theme"

import Add from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProfileIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Forum';
import {IconButton, Typography,Button, styled, Toolbar, AppBar, Box } from '@mui/material'
import {ThemeProvider } from "@material-ui/core/styles";
// contains searchbar and Post Request button

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
});

const IconsNav = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));


function Navbar() {
  return (

    <ThemeProvider theme={theme}>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant="h6" sx={{display: {xs: "none", sm:"block"}}}>
            MARKET 
          </Typography>
          {/* <HomeIcon/> */}
          <IconsNav> 
            <IconButton component={Link} to="/account">
              <ProfileIcon margin={2}/>
            </IconButton>

            <FavoriteIcon/>
            <ChatIcon/>
            <Button 
                component={Link}
                to="/post_request_items"
                variant="contained" 
                color="primary" 
                startIcon={<Add />} 
            >  
              <Typography sx={{display: {xs:"none", sm:"block"}}}> POST & REQUEST </Typography>
            </Button>
          </IconsNav>

          </StyledToolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
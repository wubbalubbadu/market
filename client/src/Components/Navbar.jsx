import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import {theme} from "../themes/Theme"
import './Navbar.css'

import Add from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProfileIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Forum';
import {IconButton, Typography,Button, styled, Toolbar, AppBar, Box } from '@mui/material'
import {ThemeProvider } from "@material-ui/core/styles";
import {GoogleLogin} from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google';
import { GlobalState } from '../GlobalState';
// contains searchbar and Post Request button

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
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
  const value = useContext(GlobalState)

  const googleSuccess = async (res) => {
    console.log(res)
  };

  const googleError = (error) => console.log(error);

  const user = null;
  
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography component = {Link} to='/' variant="h6" sx={{display: {xs: "none", sm:"block"}}}>
            MARKET 
          </Typography>
          {/* <HomeIcon/> */}
          <IconsNav> 
            { user ? (
              <IconButton component={Link} to="/account">
              <ProfileIcon margin={2}/>
            </IconButton>
            ) : (
       
              <GoogleLogin
            clientId="381794249860-mcjanab1cd2803ksbek94pgk5me0k7d9.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
            )
            }

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
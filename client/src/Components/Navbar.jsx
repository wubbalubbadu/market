<<<<<<< HEAD
import React from 'react'

import { Link } from "react-router-dom";
import {theme} from "../themes/Theme"
=======
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {theme} from "../themes/Theme"
import Login from './Login'
>>>>>>> main
import './Navbar.css'

import Add from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProfileIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Forum';
import {IconButton, Typography,Button, styled, Toolbar, AppBar, Box } from '@mui/material'
import {ThemeProvider } from "@material-ui/core/styles";
<<<<<<< HEAD
=======
import {useLocation} from 'react-router-dom'
//import { GlobalState } from '../GlobalState';


>>>>>>> main
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


<<<<<<< HEAD
function Navbar() {
  return (

    <ThemeProvider theme={theme}>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant="h6" sx={{display: {xs: "none", sm:"block"}}}>
=======

function Navbar() {

  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(()=>{
    
    setUser(JSON.parse(localStorage.getItem('profile')));
  
  },[location])

  

  return  (
    <ThemeProvider theme={theme}>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography component = {Link} to='/' variant="h6" sx={{display: {xs: "none", sm:"block"}}}>
>>>>>>> main
            MARKET 
          </Typography>
          {/* <HomeIcon/> */}
          <IconsNav> 
<<<<<<< HEAD
            <IconButton component={Link} to="/account">
              <ProfileIcon margin={2}/>
            </IconButton>
=======
            { user ? (
              <IconButton component={Link} to="/account">
              <ProfileIcon margin={2}/>
            </IconButton>
            ) : (
              <Login/>
            )
            }
>>>>>>> main

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
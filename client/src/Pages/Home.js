import React from 'react';
import { Link } from "react-router-dom";
import Add from '@mui/icons-material/Add';
import {Typography,Button} from "@material-ui/core";
import {ActionButton} from "../themes/ActionButton.js"
import { ThemeProvider } from '@mui/material';
import Sidebar from '../Components/Sidebar.jsx';
import Post from '../Components/Post.jsx';
import Navbar from '../Components/Navbar.jsx';

function Home() {
  return (
    <div>
      <ThemeProvider>
        <Sidebar/>
        <Post/>
        <Navbar/>
        <Typography variant='h2'> THIS IS HOME PAGE </Typography>

        <Button 
          component={Link}
          to="/post_items"
          variant="contained" 
          color="secondary" 

          //startIcon={<Add />} //dunno why when i add this npm starts render blank
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
        
        <ActionButton> Home </ActionButton>

      </ThemeProvider>

    </div>
  );
}

export default Home
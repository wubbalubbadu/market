import React from 'react';
import { Link } from "react-router-dom";
import Add from '@mui/icons-material/Add';
import {Typography,Button} from "@material-ui/core";
import {ActionButton} from "../theme/ActionButton.js"


function Home() {
  return (
    <div>
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
          color="primary"
        >
          REQUEST ITEMS
        </Button>
        <ActionButton> Home </ActionButton>
    </div>
  );
}

export default Home
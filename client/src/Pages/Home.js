import React from 'react';
import { Link } from "react-router-dom";
import { Typography} from "@material-ui/core";


function Home() {
  return (
    <div>
        <Typography variant='h1'> THIS IS HOEM PAGE </Typography>
        <Link to="/post_items">Click to post item</Link>
        <Link to="/request_item">Click to request items</Link>
    </div>
  );
}

export default Home
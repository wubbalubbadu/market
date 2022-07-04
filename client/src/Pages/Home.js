import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <h1>THIS IS HOME PAGE HOME PAGE HOME PAGE</h1>
        <h1>IS THIS SHOWING UP</h1>
        <Link to="/post_items">Click to post item</Link>
        <Link to="/request_item">Click to request items</Link>
    </div>
  );
}

export default Home
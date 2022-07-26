import React, { useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import {gapi} from "gapi-script"
import Home from "./Pages/Home";
import PostRequest from "./Pages/PostRequest";
import Account from "./Pages/Account"
import Message from "./Pages/Message"

function App() {

  
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "381794249860-mcjanab1cd2803ksbek94pgk5me0k7d9.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  

  return (
    

    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/post_request_items" element={<PostRequest />}/> 
        <Route path="/account" element={<Account/>}/>
        <Route path="/message" element={<Message/>}/>

      </Routes>
   </div>
   
  );
}

export default App;

//element = {<Home/>} is putting in the component we created (aka Home.js )
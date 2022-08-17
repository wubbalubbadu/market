import React from "react";
import { Routes, Route} from "react-router-dom";
import {gapi} from "gapi-script"
import Home from "./Pages/Home";
// import {theme} from "./themes/Theme"
import PostRequest from "./Pages/PostRequest";
import Account from "./Pages/Account"
import Message from "./Pages/Message"
import { createTheme } from "@material-ui/core/styles";

import {ThemeProvider } from "@material-ui/core/styles";

function App() {

  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId:
        "381794249860-mcjanab1cd2803ksbek94pgk5me0k7d9.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  const theme = createTheme({
    typography: {
      fontFamily: "Nunito",
      fontWeightLight: 200,
      fontWeightRegular: 350,
      fontWeightBold: 500,
    }
  });
  
  return (

    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/post_request_items" element={<PostRequest />}/> 
        <Route path="/account" element={<Account/>}/>
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </ThemeProvider>

   
  );
}

export default App;

//element = {<Home/>} is putting in the component we created (aka Home.js )
import React from "react";
import { Routes, Route} from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import PostRequest from "./Pages/PostRequest";
import Account from "./Pages/Account"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/post_request_items" element={<PostRequest />}/> 
        <Route path="/account" elemnt={<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;

//element = {<Home/>} is putting in the component we created (aka Home.js )
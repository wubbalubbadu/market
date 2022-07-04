import React from "react";
import { BrowserRouter as Routes, Route} from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import PostItems from "./Pages/PostItems";
import RequestItem from "./Pages/RequestItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/post_items" element={<PostItems />}/> 
        <Route path="/request_item" element={<RequestItem />}/>
      </Routes>
    </div>
  );
}

export default App;

//element = {<Home/>} is putting in the component we created (aka Home.js )
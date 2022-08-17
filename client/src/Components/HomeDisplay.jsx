import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import Postsection from "./Postsection";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { Box, Stack } from "@mui/material";

function HomeDisplay() {
  const products = useSelector((state) => state.productsReducer.products);
  console.log('products at homedisplay', products)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/api/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data.products));

    // dispatch({
    //   type: 'SET_PRODUCTS', // type is required
    //   payload: response.data.products
    // })
  };

  //console.log(products)
  
  useEffect(() => {
    fetchProducts();
   
  }, []);

  const [selectedTab, setSelectedTab] = useState("sell");
  const handleTabChange = (event, selectedTab) => {
    setSelectedTab(selectedTab);
    console.log("tabswitch click!");
  };

  return (
    <Box bgcolor="skyblue" padding={2}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar selectedTab={selectedTab} />
        <Postsection
          products={products}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        />
      </Stack>
    </Box>
  );
}

export default HomeDisplay;

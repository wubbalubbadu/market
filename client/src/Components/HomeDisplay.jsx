import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import Postsection from "./Postsection";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { Box, Stack } from "@mui/material";

function HomeDisplay() {
  const products = useSelector((state) => state.productsReducer.products);
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

  // const [selectedTab, setSelectedTab] = useState("sell");
  // const handleTabChange = (event, selectedTab) => {
  //   setSelectedTab(selectedTab);
  //   console.log("tabswitch click!");
  // };

  return (
    <Box bgcolor="white" padding={2} sx={{ marginRight: 0, paddingRight: 0 }}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        {/* selectedTab={selectedTab}  */}
        <Postsection
          products={products}
          // selectedTab={selectedTab}
          // handleTabChange={handleTabChange}
          requests={SAMPLE_REQUESTS}
        />
      </Stack>
    </Box>
  );
}

export default HomeDisplay;

const SAMPLE_REQUESTS = [
  {
    _d: "62d1e1a0c7d7db1a43f44822",
    title: "request test 1",
    description: "Im test1",
    category: "Clothing",
    user: "62cb3ceabaa89e2ae29be0f9",
    low_price: 500,
    high_price: 600,
    createdAt: "2022-07-15T21:52:32.094Z",
    updatedAt: "2022-07-15T21:52:32.094Z",
    __v: 0,
  },
  {
    _id: "62d1e1a0c7d7db1a47814",
    title: "Request Test 2",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum qui",
    category: "Clothing",
    user: "62cb3ceabaa89e2ae29be0f9",
    low_price: 20,
    high_price: 60,
    createdAt: "2022-12-15T21:52:32.094Z",
    updatedAt: "2022-12-16T00:52:32.094Z",
    __v: 0,
  },
];

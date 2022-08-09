import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import axios from "axios";

import { Box, Typography } from "@mui/material";

// http://localhost:5000/api/products?category=Furniture

const Sidebar = () => {
  const dispatch = useDispatch(); //return a function
  //useDispatch -> put data in redux!
  // const currentTab = useSelector(state => state.currentTab);
  return (
    <Box
      bgcolor="lightyellow"
      flex={0.25}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }} //when we in mobile view we dont display the sidebar
    >
      {categories.map((category) => (
        <Typography
          sx={{
            textDecoration: "none",
            "&:hover": {
              color: "blue",
              cursor: "pointer",
            },
          }}
          key={category}
          onClick={async () => {
            // if (currentTab === 'sell') {
            // }
            if (category === "All") {
              const response = await axios
                .get("http://localhost:5000/api/products")
                .catch((err) => {
                  console.log(err);
                });
              dispatch(setProducts(response.data.products));
            } else {
              const response = await axios.get(
                "http://localhost:5000/api/products?category=" + category
              );
              dispatch(setProducts(response.data.products));
            }
            // console.log(category);
            // normally, we call dispatch with an object
            // setProducts(response.data.products);
          }}
        >
          {category}
        </Typography>
      ))}
    </Box>
  );
};

export default Sidebar;

const categories = [
  "All",
  "Apparel & Accessories",
  "Beauty & Personal Care ",
  "Home & Kitchen",
  "Furniture",
  "Office Supplies",
  "Toys & Games",
  "Exercise & Fitness",
  "Garden & Outdoor",
  "Pets & Pets Supplies",
  "Consumer Electronic Goods",
  "Books",
];

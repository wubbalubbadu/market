import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import axios from "axios";
import {getCategories } from '../../redux/actions/categoryActions'
import { Box, Typography } from "@mui/material";

// http://localhost:5000/api/products?category=Furniture

const Sidebar = () => {
  const dispatch = useDispatch(); //return a function
  //useDispatch -> put data in redux!
  // const currentTab = useSelector(state => state.currentTab);
  const categories = useSelector((state) => state.categoryReducer.categories);
  
  useEffect(() => {
    dispatch(getCategories());
   
  }, []);
  
  return (
    <Box
      bgcolor="white"
      flex={0.25}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }} //when we in mobile view we dont display the sidebar
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        SORT BY
      </Typography>
      {sortby.map((sorttype) => (
        <Typography
          sx={{
            margin: "5px",
            marginLeft: 0,
            marginTop: "10px",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
              cursor: "pointer",
            },
          }}
        >
          {" "}
          {sorttype}{" "}
        </Typography>
      ))}

      <Typography
        sx={{
          fontWeight: "bold",
          "&:hover": {
            color: "blue",
            cursor: "pointer",
          },
          fontSize: 24,
          marginTop: 5,
        }}
        onClick={async () => {
          // if (currentTab === 'sell') {
          // }
          const response = await axios
            .get("http://localhost:5000/api/products")
            .catch((err) => {
              console.log(err);
            });
          dispatch(setProducts(response.data.products));
        }}
      >
        ALL CATEGORIES
      </Typography>
      {categories.map((category) => (
        <Typography
          sx={{
            margin: "5px",
            marginLeft: 0,
            marginTop: "10px",
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
            if (category.name === "All") {
              const response = await axios
                .get("http://localhost:5000/api/products")
                .catch((err) => {
                  console.log(err);
                });
              dispatch(setProducts(response.data.products));
            } else {
              const response = await axios.get(
                "http://localhost:5000/api/products?category=" + category.name
              );
              dispatch(setProducts(response.data.products));
            }
          }
            // console.log(category);
            // normally, we call dispatch with an object
            // setProducts(response.data.products);
          }
        >
          {category.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Sidebar;

const categories = [
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

const sortby = [
  "Price: Low to High",
  "Price: High to Low",
  "Latest Post",
  "Earliest Post",
];

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
      bgcolor="lightyellow"
      flex={0.25}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }} //when we in mobile view we dont display the sidebar
    >

      {categories.map((category) => (
        <Typography
          sx={{
            margin: "5px",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
              cursor: "pointer",
            },
          }}
          key={category.name}
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
            // console.log(category);
            // normally, we call dispatch with an object
            // setProducts(response.data.products);
          }}
        >
          {category.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Sidebar;


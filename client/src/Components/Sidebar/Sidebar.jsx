import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { setProducts } from '../../redux/actions/productsActions';
import { getCategories } from '../../redux/actions/categoryActions';

// http://localhost:5000/api/products?category=Furniture

function Sidebar() {
  const dispatch = useDispatch(); // return a function
  // useDispatch -> put data in redux!
  // const currentTab = useSelector(state => state.currentTab);

  const categories = useSelector((state) => state.categoryReducer.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoriesList = new Array(categories.length);
  categories.forEach((item, i) => {
    const display = item.name.replace('&', '%26');
    categoriesList[i] = [item.name, display];
  });
  categoriesList.sort();

  return (

    <Box
      bgcolor="white"
      flex={0.25}
      padding={2}
      sx={{ display: { xs: 'none', sm: 'block' } }} // when we in mobile view we dont display the sidebar
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: 24,
          fontFamily: 'Oswald',
        }}
      >
        {' '}
        SORT BY
      </Typography>
      {sortby.map((sorttype) => (
        <Typography
          sx={{
            margin: '5px',
            marginLeft: 0,
            marginTop: '10px',
            textDecoration: 'none',
            '&:hover': {
              color: 'blue',
              cursor: 'pointer',
            },
          }}
        >
          {' '}
          {sorttype}
          {' '}
        </Typography>
      ))}

      <Typography
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Oswald',
          '&:hover': {
            color: 'blue',
            cursor: 'pointer',
          },
          fontSize: 24,
          marginTop: 5,
        }}
        onClick={async () => {
          // if (currentTab === 'sell') {
          // }
          const response = await axios
            .get('http://localhost:5000/api/products')
            .catch((err) => {
              console.log(err);
            });
          dispatch(setProducts(response.data.products));
        }}
      >
        CATEGORIES
      </Typography>

      {Object.entries(categoriesDict).map(([key, value]) => (
        <Typography
          key={value}
          sx={{
            margin: '5px',
            marginLeft: 0,
            marginTop: '10px',
            textDecoration: 'none',
            '&:hover': {
              color: 'blue',
              cursor: 'pointer',
            },
          }}
          onClick={async () => {
            // if (currentTab === 'sell') {
            // }
            const response = await axios.get(
              `http://localhost:5000/api/products?category=${value}`,
            );
            dispatch(setProducts(response.data.products));
          }}
        >
          {key}
        </Typography>
      ))}
    </Box>
  );
}

export default Sidebar;

const categories = [
  'Apparel & Accessories',
  'Beauty & Personal Care ',
  'Home & Kitchen',
  'Furniture',
  'Office Supplies',
  'Toys & Games',
  'Exercise & Fitness',
  'Garden & Outdoor',
  'Pets & Pets Supplies',
  'Consumer Electronic Goods',
  'Books',
];

const sortby = [
  'Price: Low to High',
  'Price: High to Low',
  'Latest Post',
  'Earliest Post',
];

const categoriesDict = {
  'Apparel & Accessories': 'Apparel %26 Accessories',
  'Beauty & Personal Care': 'Beauty %26 Personal Care',
  'Home & Kitchen': 'Home %26 Kitchen',
  Furniture: 'Furniture',
  'Office Supplies': 'Office Supplies',
  'Toys & Games': 'Toys%26 Games',
  'Exercise & Fitness': 'Exercise %26 Fitness',
  'Garden & Outdoor': 'Garden %26 Outdoor',
  'Pets & Pets Supplies': 'Pets %26 Pets Supplies',
  'Consumer Electronic Goods': 'Consumer Electronic Goods',
  Books: 'Books',
};
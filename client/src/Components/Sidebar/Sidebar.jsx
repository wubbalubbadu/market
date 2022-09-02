import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
// import { setProducts } from '../../redux/actions/productsActions';
import { getCategories } from '../../redux/actions/categoryActions';
import { fetchProducts } from '../../redux/thunk/product';

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
      {sortby.map((sorttype, i) => (
        <Typography
          key={i}
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
          dispatch(fetchProducts());
        }}
      >
        ALL CATEGORIES
      </Typography>

      {Object.entries(categoriesList).map(([key, value]) => (
        <Typography
          key={value[0]}
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
            dispatch(fetchProducts({ category: value[1] }));
          }}
        >
          {value[0]}
        </Typography>
      ))}
    </Box>
  );
}

export default Sidebar;

const sortby = [
  'Price: Low to High',
  'Price: High to Low',
  'Latest Post',
  'Earliest Post',
];

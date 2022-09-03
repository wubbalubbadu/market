import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
// import { setProducts } from '../../redux/actions/productsActions';
import { getCategories } from '../../redux/actions/categoryActions';
import { fetchProducts } from '../../redux/thunk/product';
import { fetchRequests } from '../../redux/thunk/request';

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

  const currTab = useSelector((state) => state.tabReducer.tab);

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
      {Object.keys(sortby).map((sorttype, i) => (
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
          onClick={async () => {
            const apicall = sortby[sorttype];
            if (currTab === 0) {
              dispatch(fetchProducts({ sort: apicall }));
            } else {
              dispatch(fetchRequests({ sort: apicall }));
            }
            // dispatch(fetchProducts({ sort: apicall }));
            // dispatch(fetchProducts({ sort: apicall }));
          }}
        >
          {sorttype}
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
          if (currTab === 0) {
            dispatch(fetchProducts({ category: null }));
          } else {
            dispatch(fetchRequests({ category: null }));
          }
          // dispatch(fetchProducts({ category: null }));
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
            if (currTab === 0) {
              dispatch(fetchProducts({ category: value[0] }));
            } else {
              dispatch(fetchRequests({ category: value[0] }));
            }
            // dispatch(fetchProducts({ category: value[0] }));
          }}
        >
          {value[0]}
        </Typography>
      ))}
    </Box>
  );
}

export default Sidebar;

const sortby = {
  'Price: Low to High': 'price',
  'Price: High to Low': '-price',
  'Latest Post': '',
  'Earliest Post': '',
};

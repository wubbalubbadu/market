import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { setProducts } from '../../redux/actions/productsActions';
import { getCategories } from '../../redux/actions/categoryActions';
// http://localhost:5000/api/products?category=Furniture

function Sidebar() {
  const dispatch = useDispatch(); // return a function

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
          fontSize: 24,
          marginTop: 5,
        }}
      >
        CATEGORIES
      </Typography>

      {categoriesList.map((item, i) => (

        <Typography
          key={item[0]}
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
            if (item[1] === 'All') {
              const response = await axios
                .get('http://localhost:5000/api/products')
                .catch((err) => {
                  console.log(err);
                });
              dispatch(setProducts(response.data.products));
            } else {
              const response = await axios.get(
                `http://localhost:5000/api/products?category=${item[1]}`,
              );
              dispatch(setProducts(response.data.products));
            }
          }}

        >
          {item[0]}
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

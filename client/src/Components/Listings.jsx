import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Fab, Button, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { createProduct } from '../redux/actions/productsActions';
import { getCategories } from '../redux/actions/categoryActions';
import Listing from './Listing';

function Listings() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const user = JSON.parse(localStorage.getItem('profile'));
  const defaultValues = {
    title: '',
    price: 0,
    description: '',
    condition: '',
    images: {
      public_id: 'test/rsltmafcyek9v4fm7oid',
      url: 'https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg',
    },
    category: '',
  };

  const [formValues, setFormValues] = useState([defaultValues]);
  const navigate = useNavigate();
  const addInput = () => {
    setFormValues((s) => [...s, defaultValues]);
  };

  const deleteInput = (id) => {
    console.log(formValues);
    console.log(id);
    setFormValues((s) => s.filter((_, i) => i !== id - 1));
  };

  const handleSubmit = async (e) => {
    console.log(user?.result?.googleId);
    e.preventDefault();
    try {
      formValues.map((product, id) => {
        dispatch(createProduct({ ...product, googleId: user?.result?.googleId }));
      });
      alert('successful');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (i) => (e) => {
    const { name, value } = e.target;
    setFormValues((s) => s.map((item, id) => (id === i ? { ...item, [name]: value } : item)));
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          {formValues.map((item, i) => (
            <Listing
              key={i}
              id={i + 1}
              formValues={formValues}
              categories={categories}
              handleInputChange={handleInputChange(i)}
              deleteInput={deleteInput}
            />
          ))}

          <div>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Typography>Number of Items</Typography>

              <Typography>{formValues.length}</Typography>
              <Fab color="secondary" onClick={addInput}>
                <AddIcon />
              </Fab>
            </Stack>
          </div>
          <Button sx={{ width: 150 }} variant="contained" type="submit">
            <Typography> Sell </Typography>
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Listings;
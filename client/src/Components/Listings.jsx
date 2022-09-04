import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Fab, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import AddIcon from '@mui/icons-material/Add';
import { createProduct } from '../redux/thunk/product';
import { getCategories } from '../redux/actions/categoryActions';
import Listing from './Listing';
import { Button } from '../themes/Button';

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
    category: '',
    images: [{}, {}, {}],
  };

  const [formValues, setFormValues] = useState([defaultValues]);
  const navigate = useNavigate();
  const addInput = () => {
    setFormValues((s) => [...s, defaultValues]);
  };

  const deleteInput = (id) => {
    setFormValues((s) => s.filter((_, i) => i !== id - 1));
  };

  const handleSubmit = async (e) => {
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

/* eslint-disable */
  const handleUpload = (i, num) => async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return alert('File not exist.');
      if (file.size > 2048 * 2048) return alert('Size too large!');
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') return alert('File format is incorrect.');
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      console.log(e.target);
      console.log(res.data);
      setFormValues((s) => s.map((item, id) => (id === i ? { ...item, images: formValues[i].images.map((item, id) => (id === num ? res.data : item)) } : item)));
    } catch (err) {
      alert(err);
    }
  };
  /* eslint-enable */

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
              handleUpload={handleUpload}
            />
          ))}

          <div>
            <Stack direction="row" justifyContent="flex-end" spacing={2} alignItems="center" marginTop="20px" marginRight="30px">
              <Typography>Number of Items</Typography>
              <Typography fontWeight={500}>{formValues.length}</Typography>
              <Fab color="secondary" onClick={addInput}>
                <AddIcon />
              </Fab>
            </Stack>
          </div>
          <Button
            sx={{
              width: 150, margin: '20px', '&:hover': { color: '#F5EE9E', cursor: 'pointer' },
            }}
            variant="contained"
            type="submit"
          >
            <Typography fontFamily="Oswald" color="Black"> Sell </Typography>
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Listings;
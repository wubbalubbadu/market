import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Fab, Paper, Button, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { createRequest } from '../redux/actions/requestsActions';
import { getCategories } from '../redux/actions/categoryActions';
import Request from './Request';

function Requests() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const user = JSON.parse(localStorage.getItem('profile'));

  const defaultValues = {
    title: '',
    low_price: 0,
    high_price: 1,
    description: '',
    category: '',
  };

  const [formValues, setFormValues] = useState([defaultValues]);
  const [arr, setArr] = useState([0]);
  const navigate = useNavigate();
  const addInput = () => {
    setArr((s) => [...s, s.length]);
    setFormValues((s) => [...s, defaultValues]);
  };

  //  const categories = useSelector((state) => state.categories);
  //  console.log(categories)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      formValues.map((request, id) => {
        dispatch(createRequest({ ...request, googleId: user?.result?.googleId }));
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
    console.log(formValues);
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          {arr.map((item, i) => (
            <Request
              key={i}
              id={i + 1}
              formValues={formValues}
              categories={categories}
              handleInputChange={handleInputChange(i)}
            />
          ))}

          <div>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Typography>Number of Items</Typography>

              <Typography>{arr.length}</Typography>
              <Fab color="secondary" onClick={addInput}>
                <AddIcon />
              </Fab>
            </Stack>
          </div>
          <Button sx={{ width: 150 }} variant="contained" type="submit">
            <Typography> Request </Typography>
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Requests;

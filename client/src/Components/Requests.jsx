import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Fab, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { createRequest } from '../redux/thunk/request';
import { getCategories } from '../redux/actions/categoryActions';
import Request from './Request';
import { Button } from '../themes/Button';

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

  const navigate = useNavigate();
  const addInput = () => {
    setFormValues((s) => [...s, defaultValues]);
  };

  //  const categories = useSelector((state) => state.categories);
  //  console.log(categories)

  const deleteInput = (id) => {
    console.log(formValues);
    console.log(id);
    setFormValues((s) => s.filter((_, i) => i !== id - 1));
  };

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
          {formValues.map((item, i) => (
            <Request
              key={i}
              id={i + 1}
              formValues={formValues}
              categories={categories}
              handleInputChange={handleInputChange(i)}
              deleteInput={deleteInput}
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
            <Typography fontFamily="Oswald" color="Black"> Request </Typography>
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Requests;
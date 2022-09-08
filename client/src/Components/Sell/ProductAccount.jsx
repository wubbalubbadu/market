import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Typography, Stack } from '@mui/material';
import { defaultImage } from '../constants/homepage';
import ProductModalAccount from '../common/ProductModalAccount';
import Popup from '../common/Popup';

// Checking out an item is done.
// TODO: sort items not fulfilled -> fulfilled
// TODO: Make fulfilled items gray maybe
// Delete and update an item in open modal
// Fulfilled: checkmark could be misleading. We can try another design maybe

function ProductAccount({ product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const [openFulfilled, setOpenFulfilled] = useState(false);
  const handleOpenFulfilled = (e) => {
    e.stopPropagation();
    setOpen(false);
    setOpenFulfilled(true);
  };

  const handleCloseFulfilled = (e) => {
    e.stopPropagation();
    setOpenFulfilled(false);
  };

  const handleFulfillListing = async (e) => {
    e.stopPropagation();
    setOpenFulfilled(false);
    try {
      const res = await axios.put(`http://localhost:5000/api/products/checked/${product._id}`);
      alert('success');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box onClick={handleOpen} sx={itemstyle}>
      {product.images && typeof product.images[0].url !== 'undefined' ? (
        <img
          src={product.images[0].url}
          width={220}
          height={170}
          alt={product.images[0].url}
        />
      ) : (
        <img
          src={defaultImage.url}
          width={220}
          height={170}
          alt={defaultImage.url}
        />
      )}
      <Typography fontSize={18} textTransform="capitalize" textOverflow="ellipsis" noWrap="true">
        {' '}
        {product.title}
        {' '}
      </Typography>
      <Typography fontSize={22}>
        {' '}
        $
        {product.price}
      </Typography>
      <Typography
        align="right"
        sx={{
          '&:hover': {
            color: 'blue',
            cursor: 'pointer',
          },
        }}
        onClick={handleOpenFulfilled}
      >
        Sold? ✔️
      </Typography>
      <Popup openFulfilled={openFulfilled} handleCloseFulfilled={handleCloseFulfilled} handleFulfillListing={handleFulfillListing} />
      <ProductModalAccount
        open={open}
        onClose={handleClose}
        product={product}
      />
      {/* pass in modal state */}
    </Box>
  );
}
export default ProductAccount;

const itemstyle = {
  border: '0.5px solid #000',
  bgcolor: 'white',
  borderRadius: 2,
  boxShadow: 5,
  margin: 1,
  width: 225,
  height: 268,
  padding: 2,
  '&:hover': {
    cursor: 'pointer',
  },
  textOverflow: 'ellipsis',
};

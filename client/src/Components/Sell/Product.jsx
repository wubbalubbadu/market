import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { defaultImage } from '../constants/homepage';
import ProductModal from '../common/ProductModal';

function Product({ product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  // console.log(product);
  // console.log(product.images[0].url);
  // e = event
  // prevent dubbed bubbling
  // Modal to be close at default

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

      <ProductModal
        open={open}
        onClose={handleClose}
        product={product}
      />
      {/* pass in modal state */}
    </Box>
  );
}
export default Product;

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

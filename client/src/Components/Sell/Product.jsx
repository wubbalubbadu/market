import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ProductModal from '../common/ProductModal';

function Product({ product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  const defaultImage = {
    public_id: 'test/uvncoj2yarsodblc9d5f',
    url: 'https://res.cloudinary.com/dtoiffmee/image/upload/v1661676677/test/uvncoj2yarsodblc9d5f.png',
  };

  return (
    <Box onClick={handleOpen} sx={itemstyle}>
      {product.images && product.images.length >= 1 ? (
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

      <Typography fontSize={18}>
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
};

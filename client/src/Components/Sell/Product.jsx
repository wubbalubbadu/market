import React, { useState } from "react";
import Box from "@mui/material/Box";
import ProductModal from "../common/ProductModal";
import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

function Product({ product }) {



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  }; //e = event
  //prevent dubbed bubbling
  //Modal to be close at default

  return (
    <Card sx={{
      maxWidth: 345,
      width: 220,
      height: 280,
      margin: '4px',
      borderRadius: '10px',
      '&:hover': {
        cursor: 'pointer'
      }
    }}
    onClick={handleOpen}
    >
      <CardMedia
        component="img"
        height="190"
        width="220"
        image={product.images.url}
        alt={product.title}
      />
      <CardContent>
        <Typography fontSize={18}> {product.title} </Typography>
        <Divider sx={{ mb: '2px' }}/>
        <Typography fontSize={22} fontWeight='bold' > ${product.price} </Typography>
      </CardContent>

      <ProductModal
        open={open}
        onClose={handleClose}
        product={product}
      ></ProductModal>
      {/* pass in modal state */}
    </Card>
  );
}
export default Product;

const itemstyle = {
  border: "2px solid #000",
  bgcolor: "yellow",
  borderRadius: 2,
  boxShadow: 24,
  margin: 1,
  width: 225,
  height: 268,
  padding: 2,
};

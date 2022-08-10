import React, { useState } from "react";
import Box from "@mui/material/Box";
import ProductModal from "../common/ProductModal";
import { Typography } from "@mui/material";

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
    <Box onClick={handleOpen} sx={itemstyle}>
      <img
        src={product.images.url}
        width={220}
        height={170}
        alt={product.images.url}
      />
      <Typography fontSize={18}> {product.title} </Typography>
      <Typography fontSize={22}> ${product.price} </Typography>

      <ProductModal
        open={open}
        onClose={handleClose}
        product={product}
      ></ProductModal>
      {/* pass in modal state */}
    </Box>
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

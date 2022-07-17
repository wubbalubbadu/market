import React, {useState} from 'react'
import styled from "styled-components";
import BasicModal from './common/BasicModal'

function Product({product}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {e.stopPropagation(); 
                              setOpen(false)}; //e = event 
  //Modal to be close at default

  return (
    <Item onClick={handleOpen}>
      {product.title}
      <BasicModal open={open} onClose={handleClose} product={product}></BasicModal>
      {/* pass in modal state */}
    </Item>
  )
}
export default Product

const Item = styled.div`
  background: yellow;
  margin: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: 18px;
  filter: drop-shadow(2px 4px 6px #69696933)
  cursor:
  border: 1px;
  padding: 4;
`;
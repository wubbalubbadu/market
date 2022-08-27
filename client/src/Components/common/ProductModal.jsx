import React, { useState } from 'react';
import {
  Typography, Modal, Stack, Box, Button, Grid,
} from '@mui/material';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { SAMPLEIMAGES } from '../constants/homepage';

function ProductModal({ open, onClose, product }) {
  // console.log(product);
  // const imglist = product.images;
  // console.log(imglist);
  const [SelectedImg, setSelectedImg] = useState(SAMPLEIMAGES[0]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    padding: 10,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Grid lg={12} container spacing={2}>
          <Grid item lg={6} xs={12} sx={{ bgcolor: 'yellow' }}>
            <Imagediv>
              <ImgsContainer>
                {SAMPLEIMAGES.map((img, index) => (
                  <imgListContainer>
                    <img
                      key={index}
                      src={img}
                      alt="alt1"
                      onClick={() => setSelectedImg(img)}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        margin: '5px',
                        marginTop: '13px',
                        padding: '5px',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 20px',
                      }}
                    />
                  </imgListContainer>
                ))}
              </ImgsContainer>
              <MainPhotoContainer>
                <img
                  src={SelectedImg}
                  alt="selected"
                  style={{
                    width: '250px',
                    height: '400px',
                    margin: '20px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    minWidth: '400px',
                    boxShadow:
                      'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                  }}
                />
              </MainPhotoContainer>
            </Imagediv>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ bgcolor: 'blue' }}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <Box justifyContent="flex-start" sx={PDheadingDiv}>
                <Typography fontSize={30} fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight="light"
                  sx={{ textDecoration: 'underline' }}
                >
                  {product.category}
                </Typography>
                <Typography fontWeight="light" fontSize={28} sx={{ mt: 5, mb: 5 }}>
                  $
                  {product.price}
                </Typography>
                <Box>
                  <Typography>
                    {product.seller}
                  </Typography>
                </Box>
                <Box sx={{
                  bgcolor: 'background.paper',
                  borderColor: 'text.primary',
                  m: 1,
                  border: 1,
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '50%',
                }}
                >
                  <img>
                </Box>
                <ActionButtonDiv>
                  <Button sx={buttonstyle} component={Link} to="/message">
                    <Typography sx={{ fontFamily: 'Oswald' }}>
                      Contact Seller
                    </Typography>
                  </Button>
                  <Button sx={buttonstyle}>
                    <Typography sx={{ fontFamily: 'Oswald' }}>
                      Add to Watchings
                    </Typography>
                  </Button>
                </ActionButtonDiv>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box padding={2}>
          <Stack direction="row" justifyContent="flex-start" spacing={5}>
            <Typography fontWeight="bold" fontSize={24}>
              Condition:
            </Typography>
            <Typography fontSize={24}>
              {product.condition}
            </Typography>
          </Stack>
        </Box>

        <Box padding={2}>
          <Typography fontWeight="bold" fontSize={24}>
            Description:
          </Typography>
          <Typography fontSize={24}>
            {product.description}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProductModal;

const PDheadingDiv = {
  width: 450,
  height: 250,
  bgcolor: 'white',
  paddingTop: '2px',
};

const Imagediv = styled.div`
  background: white;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: rows;
  max-height: 450px;
`;

const ImgsContainer = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: "20%";
`;

const ActionButtonDiv = styled.div`
  background-color: "yellow";
`;

const buttonstyle = {
  maxWidth: '160px',
  maxHeight: '60px',
  minWidth: '160px',
  minHeight: '60px',
  bgcolor: 'black',
  '&:hover': {
    background: '#FECB58',
  },
  mr: 5,
};

const MainPhotoContainer = styled.div`
  background-color: orange;
`;

const imgListContainer = styled.div`
  background-color: blueviolet;
`;

// const SAMPLEIMAGES = [
//   'https://images.unsplash.com/photo-1658487476847-a180f98870d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
//   'https://images.unsplash.com/photo-1658755362781-02899c3569ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//   'https://images.unsplash.com/photo-1658756832548-f959ddf9004d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
// ];

import React, { useState, useEffect } from 'react';
import {
  Modal, Stack, Box, Avatar, Grid, Typography,
} from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SAMPLEIMAGES } from '../constants/homepage';
import { Button } from '../../themes/Button';
import { addToLoves } from '../../redux/actions/lovesActions';

function ProductModal({ open, onClose, product }) {
  const [SelectedImg, setSelectedImg] = useState(SAMPLEIMAGES[0]);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };

  const getUserInfo = async () => {
    console.log(product);
    const response = await axios
      .get(`http://localhost:5000/user/userinfo?googleId=${product.googleId}`)
      .catch((err) => {
        console.log(err);
      });
    setName(response.data.name);
    setAvatar(response.data.avatar);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const addToWatchingsSubmit = async (e) => {
    try {
      dispatch(addToLoves({ productId: product._id, googleId: user?.result?.googleId }));
      alert('success');
    } catch (err) {
      console.log(err);
    }
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
                <Stack direction="row">
                  <Avatar src={avatar} alt="avatar" />
                  <Typography>
                    {' '}
                    {name}
                    {' '}
                  </Typography>
                </Stack>
                <ActionButtonDiv>
                  <Button sx={buttonstyle} component={Link} to="/message">
                    <Typography sx={{ fontFamily: 'Oswald' }}>
                      Contact Seller
                    </Typography>
                  </Button>
                  <Button
                    sx={buttonstyle}
                    onClick={() => {
                      addToWatchingsSubmit();
                    }}
                  >
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
  margin-top: 25px;
`;

const buttonstyle = {
  maxWidth: '160px',
  maxHeight: '60px',
  minWidth: '160px',
  minHeight: '60px',
  bgcolor: 'white',
  '&:hover': {
    background: '#FCFFF7',
  },
  mr: 5,
  borderRadius: '10px',
};

const MainPhotoContainer = styled.div`
  background-color: orange;
`;

const imgListContainer = styled.div`
  background-color: blueviolet;
`;

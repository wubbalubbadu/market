import React, { useState, useEffect } from 'react';
import {
  Modal, Stack, Box, Avatar, Grid, Typography,
} from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { defaultImage } from '../constants/homepage';
import { Button } from '../../themes/Button';
import { addToLoves } from '../../redux/actions/lovesActions';

function ProductModalAccount({ open, onClose, product }) {
  // console.log(product);
  const imgsarray = product.images;
  const imagesurl = imgsarray.map((image) => image.url);
  // console.log(imagesurl);
  const [SelectedImg, setSelectedImg] = useState(
    typeof imagesurl[0] !== 'undefined' ? (
      imagesurl[0]) : (defaultImage.url),
  );
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  const style = {
    position: 'sticky',
    top: '15%',
    left: '15%',
    marginRight: '10%',
    width: '70%',
    height: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    padding: 10,
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };

  const getUserInfo = async () => {
    const response = await axios
      .get(`http://localhost:5000/user/userinfo?googleId=${product.googleId}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    setName(response.data.name);
    setAvatar(response.data.avatar);
  };

  useEffect(() => {
    getUserInfo();
  }, [user]);

  const addToWatchingsSubmit = async (e) => {
    try {
      dispatch(addToLoves({ productId: product._id, googleId: user.result.googleId }));
      alert('success');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Grid container spacing={2} columnSpacing={2}>
          <Grid item lg={6} xs={12} sx={{ bgcolor: 'white' }}>
            <Imagediv>
              <ImgsContainer>
                {imagesurl.map((img, index) => (
                  typeof img !== 'undefined' ? (
                    <ImgListContainer key={index}>
                      <img
                        src={img}
                        alt="alt1"
                        onClick={() => setSelectedImg(img)}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain',
                          borderRadius: '10px',
                          margin: '5px',
                          marginTop: '13px',
                          padding: '5px',
                          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 20px',
                        }}
                      />
                    </ImgListContainer>
                  ) : (
                    null
                  )
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
                    objectFit: 'contain',
                    minWidth: '400px',
                    boxShadow:
                      'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                  }}
                />
              </MainPhotoContainer>
            </Imagediv>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ bgcolor: 'white', paddingLeft: '20px' }}>
            <Grid container rowSpacing={2}>
              <Grid item lg={12} xs={6} sx={{ bgcolor: 'white', marginTop: '20px' }}>
                <Stack direction="row" justifyContent="space-between" spacing={1}>
                  <Grid item lg={12} xs={6}>
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
                    <Typography fontWeight="light" fontSize={28} sx={{ mt: 5 }}>
                      $
                      {product.price}
                    </Typography>
                  </Grid>
                </Stack>
              </Grid>
              <Grid item lg={12} xs={6} sx={{ bgcolor: 'white', marginTop: '10px' }}>
                <Grid item lg={12} xs={6} sx={{ marginTop: '15px' }}>
                  <Stack flexDirection="row" alignItems="center">
                    <Avatar referrerpolicy="no-referrer" src={avatar} alt="avatar" sx={{ marginRight: '10px' }} />
                    <Typography>
                      {name}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid container rowSpacing={2} sx={{ marginTop: '5px' }}>
                  <Grid item lg={6} xs={12}>
                    <Button sx={buttonstyle} component={Link} to="/message">
                      <Typography sx={{ fontFamily: 'Oswald' }}>
                        Edit my listing
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Button
                      sx={buttonstyle}
                      onClick={() => {
                        addToWatchingsSubmit();
                      }}
                    >
                      <Typography sx={{ fontFamily: 'Oswald' }}>
                        Delete my listing
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} xs={12} rowSpacing={2} sx={{ marginTop: '25px' }}>
          <Grid item lg={12} xs={12}>
            <Stack flexDirection="row">
              <Typography fontWeight="bold" fontSize={24}>
                Condition:
              </Typography>
              <Typography fontSize={24}>
                &nbsp;
                &nbsp;
                {product.condition}
              </Typography>
            </Stack>

          </Grid>
          <Grid item lg={12} xs={12}>
            <Typography fontWeight="bold" fontSize={24}>
              Description:
            </Typography>
            <Typography fontSize={24}>
              {product.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ProductModalAccount;

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
  background-color: "white";
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
  background-color: white;
`;

const ImgListContainer = styled.div`
  background-color: none;
`;

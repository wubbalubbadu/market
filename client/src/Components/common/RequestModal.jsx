import React, { useState, useEffect } from 'react';
import {
  Modal, Stack, Box, Avatar, Grid, Typography,
} from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../themes/Button';
import { addToLoves } from '../../redux/actions/lovesActions';

function RequestModal({ open, onClose, request }) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    // console.log(product);
    const response = await axios
      .get(`http://localhost:5000/user/userinfo?googleId=${request.googleId}`)
      .catch((err) => {
        console.log(err);
      });
    setName(response.data.name);
    setAvatar(response.data.avatar);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // const addToWatchingsSubmit = async (e) => {
  //   try {
  //     dispatch(addToLoves({ productId: product._id, googleId: user?.result?.googleId }));
  //     alert('success');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Grid container>
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <Grid item lg={12} xs={12}>
              <Typography fontSize={30} fontWeight="bold" textTransform="capitalize">
                {request.title}
              </Typography>
              <Typography
                fontSize={16}
                fontWeight="light"
                sx={{ textDecoration: 'underline' }}
              >
                {request.category}
              </Typography>
              <Typography fontWeight="bold" fontSize={24} sx={{ mt: 5 }}>
                Price Range:
              </Typography>
              <Typography fontWeight="light" fontSize={28}>
                $
                {request.low_price}
                -
                {request.high_price}
              </Typography>
            </Grid>
          </Stack>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={7} xs={12} sx={{ bgcolor: 'white', marginTop: '20px', mr: '40px' }}>
            <Typography fontWeight="bold" fontSize={24}>
              Description:
            </Typography>
            <Typography fontSize={24}>
              {request.description}
            </Typography>
          </Grid>
          <Grid item bgcolor="white" lg={4}>
            <Stack flexDirection="row" alignItems="center" marginTop="50px">
              <Avatar src={avatar} alt="avatar" sx={{ marginRight: '10px' }} />
              <Typography>
                {name}
              </Typography>
            </Stack>
            <Grid container rowSpacing={2} sx={{ marginTop: '5px' }}>
              <Grid item lg={6} xs={6} sx={{ bgcolor: 'white' }}>
                <Button sx={buttonstyle} component={Link} to="/message">
                  <Typography sx={{ fontFamily: 'Oswald' }}>
                    Contact Seller
                  </Typography>
                </Button>
              </Grid>
              <Grid item lg={6} xs={6} sx={{ bgcolor: 'white' }}>
                <Button
                  sx={buttonstyle}
                >
                  <Typography sx={{ fontFamily: 'Oswald' }}>
                    Add to Watchings
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default RequestModal;

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

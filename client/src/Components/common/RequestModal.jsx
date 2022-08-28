import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Modal, Stack, Box, Button,
} from '@mui/material';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

function ProductModal({ open, onClose, request }) {
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
        <Box justifyContent="flex-start" sx={PDheadingDiv}>
          <Typography id="modal-modal-title" fontSize={30} fontWeight="bold">
            {request.title}
          </Typography>
          <Typography
            fontSize={24}
            fontWeight="light"
            sx={{ textDecoration: 'underline' }}
          >
            {request.category}
          </Typography>
          <Typography fontSize={28} sx={{ mt: 5, mb: 5 }}>
            $
            {request.low_price}
          </Typography>
          <Typography fontSize={28} sx={{ mt: 5, mb: 5 }}>
            $
            {request.high_price}
          </Typography>
          <Box>
            <Typography>
              {request.user}
            </Typography>
          </Box>
          <ActionButtonDiv>
            <Button sx={buttonstyle} component={Link} to="/message">
              Contact Seller
            </Button>
            <Button sx={buttonstyle}>Add to Watchings</Button>
          </ActionButtonDiv>
        </Box>

        <Box padding={2}>
          <Typography fontWeight="bold" fontSize={24}>
            Description:
          </Typography>
          <Typography fontSize={24}>
            {request.description}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProductModal;

const PDheadingDiv = {
  width: 450,
  height: 480,
};

const Imagediv = styled.div`
  background: white;
  width: 60%;
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

const SAMPLEIMAGES = [
  'https://images.unsplash.com/photo-1658487476847-a180f98870d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  'https://images.unsplash.com/photo-1658755362781-02899c3569ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1658756832548-f959ddf9004d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RequestModal from '../common/RequestModal';

function Request({ request }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  }; // e = event
  // prevent dubbed bubbling
  // Modal to be close at default

  return (
    <Box onClick={handleOpen} sx={itemstyle}>
      <Typography fontSize={20} textTransform="capitalize" fontWeight={850}>
        {request.title}
      </Typography>
      <Typography marginTop={2}>
        {request.description}
      </Typography>

      <Typography fontSize={20} fontWeight={850} marginBottom={4} marginTop={2}>
        {request.low_price}
        -
        {request.high_price}
      </Typography>
      <RequestModal
        open={open}
        onClose={handleClose}
        request={request}
      />
      {/* pass in modal state */}
    </Box>
  );
}
export default Request;

const itemstyle = {
  border: '0.5px solid #000',
  bgcolor: 'white',
  borderRadius: 2,
  boxShadow: 5,
  margin: 1,
  width: 550,
  height: 268,
  padding: 2,
  '&:hover': {
    cursor: 'pointer',
  },
};

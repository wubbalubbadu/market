import React from 'react';
import { Box, Grid, Typography, Stack, Avatar } from '@mui/material';

function MyDetails({ name, avatar }) {
  return (
    <Box>
      <Typography marginTop={4}>
        Review and update your account details.
      </Typography>
      <Typography marginTop={2}>
        Please make sure they are up to date as they’ll be used for product display and communication.
      </Typography>
      <Typography marginTop={4} marginBottom={4} fontFamily="Oswald" fontStyle="Regular" fontWeight={400} fontSize={22}>Information & Preferences</Typography>
      <Stack flexDirection="row" alignItems="center">
        <Avatar src={avatar} alt="avatar" sx={{ marginRight: '10px' }} />
        <Typography>
          {name}
        </Typography>
      </Stack>
    </Box>
  );
}

export default MyDetails;
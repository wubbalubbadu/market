import React from 'react';
import { Box, Typography, Stack, Avatar } from '@mui/material';

function MyDetails({ name, avatar }) {
  return (
    <Box>
      <div>
        <Typography>Review and update your account details. </Typography>
        <Typography>Please make sure they are up to date as they’ll be used for product display and communication.</Typography>
      </div>
      <Typography>Information & Preferences</Typography>
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
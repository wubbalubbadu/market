import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

function AccountSidebar({ handleClick }) {
  return (
    <Box
      bgcolor="white"
      flex={0.25}
      padding={1}
      sx={{ display: { xs: 'none', sm: 'block' } }} // when we in mobile view we dont display the sidebar
    >
      <Stack direction="column">
        <Button onClick={handleClick} value="My Details">
          <Typography sx={{ fontFamily: 'Oswald' }}> My Details </Typography>
        </Button>
        <Button onClick={handleClick} value="My Listings">
          <Typography sx={{ fontFamily: 'Oswald' }}> My Listings </Typography>
        </Button>
        <Button onClick={handleClick} value="My Requests">
          <Typography sx={{ fontFamily: 'Oswald' }}> My Requests </Typography>
        </Button>
        <Button onClick={handleClick} value="My Watchings">
          <Typography sx={{ fontFamily: 'Oswald' }}> My Watchings </Typography>
        </Button>
      </Stack>
    </Box>

  );
}

export default AccountSidebar;

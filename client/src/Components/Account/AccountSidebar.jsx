import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ListAltIcon from '@mui/icons-material/ListAlt';

function AccountSidebar({ handleClick }) {
  return (
    <Box
      bgcolor="white"
      flex={0.3}
      paddingLeft={1}
      sx={{ display: { xs: 'none', sm: 'block' } }} // when we in mobile view we dont display the sidebar
    >
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Button onClick={handleClick} value="My Details">
          <ManageAccountsIcon />
          &nbsp;
          <Typography fontFamily="Nunito" fontWeight={400}> My Details </Typography>
        </Button>
        <Button onClick={handleClick} value="My Listings">
          <ListAltIcon />
          &nbsp;
          <Typography fontFamily="Nunito" fontWeight={400}> My Listings </Typography>
        </Button>
        <Button onClick={handleClick} value="My Requests">
          <ShoppingBasketIcon />
          &nbsp;
          <Typography fontFamily="Nunito" fontWeight={400}> My Requests </Typography>
        </Button>
        <Button onClick={handleClick} value="My Watchings">
          <LoyaltyIcon />
          &nbsp;
          <Typography fontFamily="Nunito" fontWeight={400}> My Watchings </Typography>
        </Button>
      </Stack>
    </Box>

  );
}

export default AccountSidebar;

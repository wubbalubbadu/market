import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Button } from '../themes/Button';
import { setTab } from '../redux/actions/tabsActions';

function TabSwitch() {
  // 0 = sell (products)
  // 1 = request
  const tab = useSelector((state) => state.tabReducer.tab);
  const dispatch = useDispatch();
  const handleTabChange = (newtab) => {
    // console.log(`tab switched to ${newtab}`);
    dispatch(setTab(newtab));
  };

  return (
    <Box sx={{ width: '100%', background: 'white', marginTop: '10px', marginBottom: '10px' }}>
      <Button onClick={() => handleTabChange(0)}>
        <Typography sx={{ fontFamily: 'Oswald' }}> Sell </Typography>
      </Button>
      <Button onClick={() => handleTabChange(1)}>
        <Typography sx={{ fontFamily: 'Oswald' }}> Request </Typography>
      </Button>
    </Box>
  );
}

export default TabSwitch;

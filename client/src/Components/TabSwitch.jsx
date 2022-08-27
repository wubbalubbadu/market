import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    <Box sx={{ width: '100%', background: 'white' }}>
      <Button onClick={() => handleTabChange(0)}>Sell</Button>
      <Button onClick={() => handleTabChange(1)}>Request</Button>
    </Box>
  );
}

export default TabSwitch;

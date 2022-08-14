import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/actions/tabsActions";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabSwitch({ selectedTab }) {
  // 0 = sell (products)
  // 1 = request
  const currTab = useSelector((state) => state.tabReducer.tab);
  const dispatch = useDispatch();
  const handleTabChange = (tabval) => {
    dispatch(setTab(tabval));
  };

  return (
    <Box sx={{ width: "100%", background: "white" }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="product" label="Sell" />
        <Tab value="request" label="Request" />
      </Tabs>
    </Box>
  );
}

export default TabSwitch;

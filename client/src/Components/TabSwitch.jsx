import React from "react";
import handleTabChange, { setSelectedTab } from "./HomeDisplay";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabSwitch({ selectedTab }) {
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

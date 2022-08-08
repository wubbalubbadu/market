import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabSwitch({ selectedTab, handleTabChange }) {
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

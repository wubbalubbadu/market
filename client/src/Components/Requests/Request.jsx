import React, { useState } from "react";
import Box from "@mui/material/Box";
import RequestModal from "../common/RequestModal";
import { Typography } from "@mui/material";

function Request({ request }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  }; //e = event
  //prevent dubbed bubbling
  //Modal to be close at default

  return (
    <Box onClick={handleOpen} sx={itemstyle}>
      <Typography fontSize={18}> {request.title} </Typography>

      <RequestModal
        open={open}
        onClose={handleClose}
        request={request}
      ></RequestModal>
      {/* pass in modal state */}
    </Box>
  );
}
export default Request;

const itemstyle = {
  border: "0.5px solid #000",
  bgcolor: "white",
  borderRadius: 2,
  boxShadow: 5,
  margin: 1,
  width: 550,
  height: 268,
  padding: 2,
  "&:hover": {
    cursor: "pointer",
  },
};

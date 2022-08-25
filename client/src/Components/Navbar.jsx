import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

import Add from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ProfileIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Forum";
import {
  IconButton,
  Typography,
  Button,
  styled,
  Toolbar,
  AppBar,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";

// contains searchbar and Post Request button

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: 10,
  margin: 5,
});

const IconsNav = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "white", borderRadius: "5px", boxShadow: 0 }}
    >
      <StyledToolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          MARKET
        </Typography>
        {/* <HomeIcon/> */}
        <IconsNav>
          {user ? (
            <IconButton component={Link} to="/account">
              <ProfileIcon margin={2} style={{ color: "black" }} />
            </IconButton>
          ) : (
            <Login />
          )}

          <FavoriteIcon style={{ color: "black" }} />
          <ChatIcon style={{ color: "black" }} />
          <Button
            component={Link}
            to="/post_request_items"
            variant="contained"
            startIcon={<Add color="black" />}
            sx={{ bgcolor: "white" }}
          >
            <Typography
              sx={{ display: { xs: "none", sm: "block" }, color: "black" }}
            >
              POST & REQUEST
            </Typography>
          </Button>
        </IconsNav>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;

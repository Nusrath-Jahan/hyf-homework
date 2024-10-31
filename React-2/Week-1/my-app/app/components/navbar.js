"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const router = useRouter();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    router.push(path);
    handleCloseMenu();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Blog
        </Typography>

        {isSmallScreen ? (
          <>
            <IconButton edge="start" color="inherit" onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={() => handleNavigate("/pages/blog_website")}>
                Home
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/pages/picture")}>
                Astronomy Picture
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("/pages/mars_Rover_Photos")}
              >
                Mars Photos
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              onClick={() => handleNavigate("/pages/blog_website")}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigate("/pages/picture")}
            >
              Astronomy Picture
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigate("/pages/mars_Rover_Photos")}
            >
              Mars Photos
            </Button>

            {/* Signup Button wrapped in Link */}
            <Link href="/pages/signUp" passHref>
              <Button variant="contained">Sign Up</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

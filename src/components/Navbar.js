import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";       // ⟵ חדש

import "../styles/Navbar.css";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: <HomeIcon /> },
    { to: "/menu", label: "Menu", icon: <RestaurantMenuIcon /> },
    { to: "/about", label: "About", icon: <InfoIcon /> },
    { to: "/contact", label: "Contact", icon: <PhoneIcon /> },
  ];

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Yizhak Pizza" />
      </div>

      <div className="rightSide">
        {links.map((l) => (
          <Link key={l.to} to={l.to}>
            {l.label}
          </Link>
        ))}

        <IconButton aria-label="פתח תפריט" onClick={() => setDrawerOpen(true)}>
          <ReorderIcon />
        </IconButton>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)} // סגירה בלחיצה על הרקע/ESC
        PaperProps={{
          sx: { backgroundColor: "#000", color: "#fff", width: 280 }, // שחור
        }}
        ModalProps={{ keepMounted: true }}
      >
        {/* Header של המגש: לוגו + כפתור X */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <img src={Logo} alt="Yizhak Pizza" style={{ height: 32 }} />
          <IconButton
            aria-label="סגור תפריט"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          {links.map((l) => (
            <ListItemButton
              key={l.to}
              component={Link}
              to={l.to}
              onClick={() => setDrawerOpen(false)} // סגירה בלחיצה על לינק
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                {l.icon}
              </ListItemIcon>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;

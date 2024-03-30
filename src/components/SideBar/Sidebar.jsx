import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { useMediaQuery, IconButton, TextField } from "@mui/material";
import SideData from "./SideData";
import DashboardCard from "../Cards/DashboardCard";
import TableComp from "../Table/TableComp";


import DashboardCharts from "../Charts/DashboardCharts";
import CircularChart from "../Charts/CircularChart";


const drawerWidth = 240;

export default function SideBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `isMobile? "100%": calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          // width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1
          backgroundColor: "#F4F5F9",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              ml: isMobile ? "0px" : "260px",
              fontWeight: 600,
            }}
          >
            Hello Shahruk 👋,
          </Typography>

          {!isMobile && (
            <TextField
              size="small"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                border: "none",
                marginRight: "25px",
              }}
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: "inherit" }} />,
              }}
            />
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",

            backgroundColor: "#040440",
            //   overflowX: "hidden",
            color: "white",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Divider />

        <SideData />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      
      
        <DashboardCard />
        <DashboardCharts/>
        {/* <CircularChart/> */}

        <TableComp />
      </Box>
    </Box>
  );
}

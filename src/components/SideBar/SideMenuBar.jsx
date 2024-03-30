import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const fontStyles = {
  fontSize: 12,
  fontFamily: "Arial, sans-serif",
  fontWeight: 400,
};
function SidebarItem({ item, isActive,isSecondGroup }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const fontSize = isSecondGroup ? 12 : 18;
  const imgHeight = isSecondGroup ? 20 : 30;
  const imgWidth = isSecondGroup ? 20 : 30;
  return (
    <ListItemButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
        },
        ...(isHovered && {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
        }),
        ...(isActive && {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)", 
          borderRadius: "8px", 
        }),
        margin: "10px 15px 0px 15px",
       
      }}
    >
      <ListItemIcon sx={{marginRight: "-20px"}}>
        <img src={item.img} alt=""  height={imgHeight} width={imgWidth}  />
      </ListItemIcon>
      <ListItemText>
        <Typography sx={{ fontSize: fontSize ,}}>{item.name}</Typography>
      </ListItemText>

      {item.children && <KeyboardArrowRightIcon />}
    </ListItemButton>
  );
}

export function SideMenuBar({ items }) {
  const firstGroup = items.slice(0, 1); // First item
  const secondGroup = items.slice(1); // Rest of the items
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const activeItemName = secondGroup.length > 0 ? secondGroup[0].name : "";
  return (
    <Box>
      <List disablePadding>
        <div style={{ marginTop: "10px" }}></div>

        {firstGroup.map((sidebarItem, index) => (
          <SidebarItem key={`${sidebarItem.name}${index}`} item={sidebarItem} />
        ))}
        <div style={{ marginTop: "40px" }}></div>
        {secondGroup.map((sidebarItem, index) => (
          <SidebarItem
            key={`${sidebarItem.name}${index}`}
            item={sidebarItem}
            isActive={sidebarItem.name === activeItemName}
            isSecondGroup={true}
          />
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          margin: "0px 5px 0px 5px",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography sx={{ ...fontStyles }}>Evano</Typography> 
            }
            secondary={
              <React.Fragment>
                <Typography
                 sx={{ display: "inline", ...fontStyles }} 
                  component="span"
                  variant="body2"
                  color="gray"
                >
                  Project Manager
                </Typography>
              </React.Fragment>
            }
          />
          <KeyboardArrowDownIcon
            sx={{
              marginTop: "15px",
              marginLeft: "20px",
            }}
          />
        </ListItem>
      </Box>
    </Box>
  );
}

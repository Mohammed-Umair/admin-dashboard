import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Paper,
  Box,
  Table,
  TableContainer,
  TableBody,
  TextField,
  Button,
  useMediaQuery,
  TableCell,
  TableRow,
  TableHead,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { dashboardTableData } from "../../utils/dashboardTable";
const TableComp = () => {
  const isSmallScreen = useMediaQuery("(max-width: 912px)");
  return (
    <Grid container mt={3}>
      <Grid item xs={0.3}></Grid>
      <Grid item xs={11.4} component={Paper}>
        <Box
          sx={{
            m: "15px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: isSmallScreen ? "flex-start" : "center",
          }}
        >
          <Typography
            variant="h6 "
            sx={{
              fontWeight: 600,
              color: "balck",
              fontSize: "20px",
              marginBottom: isSmallScreen ? "15px" : 0,
            }}
          >
            Product Sell
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              sx={{
                width: "150px",
                marginBottom: isSmallScreen ? "15px" : 0,
                marginRight: isSmallScreen ? 0 : "15px",
              }}
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: "inherit" }} />,
              }}
            />
            <Button
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: "#FAFBFF",
                textTransform: "capitalize",
                fontSize: "12px",
                marginBottom: isSmallScreen ? "15px" : 0,
                marginLeft: isSmallScreen ? 0 : "15px",

                color: "gray",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#FAFBFF",
                  color: "gray",
                  boxShadow: "none",
                },
              }}
            >
              Last 30 days
            </Button>
          </Box>
        </Box>
        <Box width="auto">
          <TableContainer>
            <Table
              // sx={{ width: "auto" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Stock
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Total Sales
                  </TableCell>
                </TableRow>
              </TableHead>
              <Divider />
              <TableBody>
                {dashboardTableData.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      {/* <TableCell align="left">{item.heading}</TableCell> */}

                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <img
                            src={item.img}
                            height="45px"
                            width="70px"
                            alt=""
                            style={{
                              borderRadius: "5px",
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            ml: "10px",
                          }}
                          primary={
                            <Typography
                              sx={{ fontSize: "18px", fontWeight: 600 }}
                            >
                              {item.heading}
                            </Typography>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="gray"
                              >
                                {item.desc}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>

                      <TableCell align="center">{item.stock}</TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        ${item.price}
                      </TableCell>
                      <TableCell align="center">{item.total}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={0.3}></Grid>
    </Grid>
  );
};

export default TableComp;

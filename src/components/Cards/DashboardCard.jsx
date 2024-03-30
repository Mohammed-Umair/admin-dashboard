import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Paper,
  Box,
} from "@mui/material";
import React, { useState } from "react";

import { dashboardCardData } from "../../utils/dashboardCardData";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const DashboardCard = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#F4F5F9",
        }}
      >
        <Grid item xs={0.3}></Grid>
        <Grid item xs={11.4}>
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2,
              md: 2,
              lg: 2,
            }}
            columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
          >
            {dashboardCardData.map((card, index) => {
              return (
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Card
                    sx={{
                      minWidth: 205,
                      height: 140,
                      borderRadius: "4px",
                      mt: 2.5,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5px",
                        mt:"10px"
                      }}
                    >
                      <Box
                        sx={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "50%",
                          backgroundColor: card.color,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          ml:"-10px"
                        }}
                      >
                        <img
                          src={card.icon}
                          alt=""
                          height="40px"
                          width="40px"
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            color: "gray",
                            fontSize: "14px",
                          }}
                        >
                          {card.text}
                        </Typography>
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            color: "black",
                            fontSize: "22px",
                            fontWeight: 600,
                          }}
                        >
                          ${card.amount}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Typography
                            sx={{
                              textTransform: "capitalize",
                              color:
                                card.amount==="2.4K" ? "red" : "green",
                              fontSize: "12px",
                              display: "flex",
                              fontWeight:"bold"
                            }}
                          >
                            {card.amount ==="2.4K" ? (
                              <ArrowDownwardIcon
                                sx={{ color: "red", fontSize: "16px" }}
                              />
                            ) : (
                              <ArrowUpwardIcon
                                sx={{ color: "green", fontSize: "16px" }}
                              />
                            )}{" "}
                            {card.amountvaluation} 
                          </Typography>
                          <span
                            style={{
                              fontSize: "12px",
                              color: "black !important",
                            }}
                          >
                            this month
                          </span>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}

           </Grid>
        </Grid>

        <Grid item xs={0.3}></Grid>
      </Grid>
    </>
  );
};

export default DashboardCard;



{/* <Divider />

<Box width="auto">
  <TableContainer>
    <Table
      // sx={{ width: "auto" }}
      aria-label="simple table"
    >
      <TableBody>
        {allData.map((item, index) => {
        return (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell component="th" scope="row">
              <Checkbox
                size="small"
                sx={{
                  color: "#23ccef",
                }}
                {...label}
                defaultChecked
              />
            </TableCell>
            <TableCell align="left">{item.task}</TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <BootstrapTooltip
                  placement="top"
                  title="Edit Task..."
                >
                  <ModeEditOutlineRoundedIcon
                    onClick={() => handleEdit(item.id)}
                    sx={{
                      color: "#23ccef",
                      fontSize: "20px",
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip
                  placement="top"
                  title="Edit Task..."
                >
                  <ClearIcon
                    onClick={() => handleDelete(item.id)}
                    sx={{ color: "red", fontSize: "20px" }}
                  />
                </BootstrapTooltip>
              </Box>{" "}
            </TableCell>
          </TableRow>
        );
      })}
      </TableBody>
    </Table>
  </TableContainer>
</Box> */}


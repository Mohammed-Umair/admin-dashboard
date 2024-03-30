import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Paper,
  Box,
  Button,
} from "@mui/material";
import MonthlyBarChart from "./MonthlyBarChart";
import CircularChart from "./CircularChart";
const DashboardCharts = () => {
  return (
    <Grid container mt={3}>
      <Grid item xs={0.3}></Grid>
      <Grid container xs={11.4} spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <MonthlyBarChart />
        </Grid>
        <Grid item xs={0.4}></Grid>
        <Grid item xs={12} sm={12} md={3.6} lg={3.6}>
          <CircularChart />
        </Grid>
      </Grid>
      <Grid item xs={0.3}></Grid>
    </Grid>
  );
};

export default DashboardCharts;

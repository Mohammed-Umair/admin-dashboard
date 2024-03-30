import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReactApexChart from "react-apexcharts";

const MonthlyBarChart = () => {
  const theme = useTheme();
  const info = "#5A32EA";
  const gray = "#ebdbfd";

  const [series] = useState([
    {
      data: [40, 30, 45, 20, 25, 35, 9, 15, 30, 39, 10, 20],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "75%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: Array.from({ length: 12 }, (_, index) =>
            index === new Date().getMonth() ? info : gray
          ),
        },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: "light",
    },
    colors: [
      gray,
      gray,
info,
gray,
gray,
gray,
gray,
gray,
gray,
gray,
gray,
gray,
    ]
  });

  return (
    <Box component={Paper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "-20px",
            }}
          >
            Overview
          </Typography>
          <span
            style={{
              color: "gray",
              marginLeft: "20px",
            }}
          >
            Monthly Earning
          </span>
        </Box>
        <Button
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: "#FAFBFF",
            textTransform: "capitalize",
            fontSize: "12px",
            marginRight: "10px",
            color: "gray",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#FAFBFF",
              color: "gray",
              boxShadow: "none",
            },
          }}
        >
          Quarterly
        </Button>
      </Box>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={230}
        />
      </div>
    </Box>
  );
};

export default MonthlyBarChart;

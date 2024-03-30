import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { Box, Paper, Typography } from "@mui/material";

const CircularChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [34, 65, 75],
      chart: {
        type: "donut",
        width: "100%",
      },
      colors: ["#F3399A", "#623AEA", "#F1EFFC"],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
          expandOnClick: true, // This makes the first segment expandable
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
    };
    

    if (!chartContainerRef.current) return;

    // Log the options to inspect if there's anything unusual
    console.log("Options:", options);

    const chart = new ApexCharts(chartContainerRef.current, options);
    chart.render();

    // Log the chart object to inspect its properties
    console.log("Chart Object:", chart);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Box
      component={Paper}
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pl: "20px",
          pt: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            // marginLeft: "-20px",
          }}
        >
          Customers
        </Typography>
        <Typography
          sx={{
            color: "gray",
            // marginLeft: "20px",
            fontSize: "12px",
          }}
        >
          Customers that Buy Products
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <span
          style={{
            fontSize: "24px !important",

            fontWeight: "bold",
            display: "block",
          }}
        >
          65%
        </span>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "12px",
            
            
            // marginLeft: "-20px",
          }}
          >

          Total New <br /> Customers
        </Typography>
      </Box>
      {/* Log chartContainerRef to ensure it's correctly assigned */}
      {console.log("Chart Container Ref:", chartContainerRef)}
      <div ref={chartContainerRef} style={{ width: "100%", height: "240px" }} />
    </Box>
  );
};

export default CircularChart;

import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { Box, Paper, Typography ,useMediaQuery} from "@mui/material";

const CircularChart = () => {
  const isSmallScreen = useMediaQuery("(max-width: 912px)");
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [34, 65, 75],
      chart: {
        type: "donut",
        width: "100%",
        height: 200,
        events: {
          animationEnd: function(ctx) {
            ctx.toggleDataPointSelection(0);
          }
        }
      },
      colors: ["#F3399A", "#623AEA", "#F1EFFC"],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false
            }
          },
          expandOnClick: true,
          stroke: {
            color: "#F3399A"
          }
        },
      
        donut: {
          size: "95%"
        }
      },
      stroke: {
        width: 0
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      }
    };

    if (!chartContainerRef.current) return;

    const chart = new ApexCharts(chartContainerRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Box
      component={Paper}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "305px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginRight: isSmallScreen?"180px":"60px",
          marginTop: "10px"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Customers
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: "12px"
          }}
          variant="subtitle1"
        >
          Customers that Buy Products
        </Typography>
      </Box>
    
      <Box component={Paper} sx={{
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        position: 'relative',
        mt: "20px",
        boxShadow: 2
      }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
        >
          <span
            style={{
              fontSize: "24px !important",
              fontWeight: "bold",
              display: "block"
            }}
          >
            65%
          </span>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "12px"
            }}
          >
            Total New <br /> Customers
          </Typography>
        </Box>
        <div ref={chartContainerRef} style={{ width: "100%", height: "500px", marginTop: "10px" }} />
      </Box>
    </Box>
  );
};

export default CircularChart;

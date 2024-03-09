import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// #3E61FF
// #2196f3
// #C7C7C7
// #D4D4D4

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/HomeTwo");
    }, 2000);
  }, [navigate]);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 30,
          gap: 2,
        }}
      >
        <Box
          component="img"
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
          src="./pictures/healthcare3.png"
        ></Box>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 900,
          }}
        >
          {" "}
          Medica{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="img" src="./pictures/loading.png"></Box>
      </Box>
    </>
  );
};
export default Start;

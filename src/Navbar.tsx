import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
        }}
      >
        <Typography fontWeight={900}> 9:41 </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              width: 15,
              height: 15,
            }}
            src="./pictures/signal.png"
          ></Box>
          <Box
            component="img"
            sx={{
              width: 15,
              height: 15,
            }}
            src="./pictures/wi-fi.png"
          ></Box>
          <Box
            component="img"
            sx={{
              width: 15,
              height: 15,
            }}
            src="./pictures/full-battery.png"
          ></Box>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;

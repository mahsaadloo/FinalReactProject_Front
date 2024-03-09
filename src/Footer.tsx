import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ borderTop: "1px solid #eeeeee", marginTop: 2, marginBottom: 3 }}
      ></Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", paddingX: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src="./pictures/homepage.png"></Box>
          <Typography sx={{ color: "#2196f3" }}>Home</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src="./pictures/calendar.png"></Box>
          <Typography sx={{ color: "#D4D4D4" }}>Appointme..</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src="./pictures/history.png"></Box>
          <Typography sx={{ color: "#D4D4D4" }}>History</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src="./pictures/document.png"></Box>
          <Typography sx={{ color: "#D4D4D4" }}>Articles</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src="./pictures/user.png"></Box>
          <Typography sx={{ color: "#D4D4D4" }}>Profile</Typography>
        </Box>
      </Box>
    </>
  );
};
export default Footer;

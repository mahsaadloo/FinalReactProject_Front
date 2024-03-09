import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { light: "#42a5f5", main: "#1976d2", dark: "#2196f3" },
  },
});

const HomeTwo = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/HomeThree";
    navigate(path);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Box
            component="img"
            src="./pictures/nurse3.jpg"
            sx={{ minWidth: 200 }}
          ></Box>
        </Box>
        <Box sx={{ padding: 5 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 34,
              color: "primary.dark",
              fontWeight: 600,
            }}
          >
            Thousands of doctors & experts to help your health!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginY: 5 }}>
            <Box component="img" src="./pictures/rec1.png"></Box>
            <Box component="img" src="./pictures/dot1.png"></Box>
            <Box component="img" src="./pictures/dot1.png"></Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={routeChange}
              variant="contained"
              sx={{ borderRadius: 7, width: 1, paddingY: 2 }}
            >
              {" "}
              Next{" "}
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default HomeTwo;

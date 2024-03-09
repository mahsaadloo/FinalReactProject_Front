import {
  Box,
  Button,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const ShouldLogin = () => {
  const theme = createTheme({
    palette: {
      primary: { light: "#42a5f5", main: "#1976d2", dark: "#2196f3" },
      secondary: { light: "#e0e0e0", main: "#9e9e9e", dark: "#424242" },
    },
  });
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/SetProfile";
    navigate(path);
  };
  const routeChangeButton = () => {
    const path = "/Login";
    navigate(path);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginTop: 3,
            paddingLeft: 2,
          }}
        >
          <IconButton onClick={routeChange}>
            <img src="./pictures/back.png" />{" "}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Box
            component="img"
            src="./pictures/login.avif"
            sx={{ minWidth: 400 }}
          ></Box>
        </Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 900,
            display: "flex",
            justifyContent: "center",
            marginBottom: 3,
          }}
        >
          Let's you in
        </Typography>
        <Box>
          <Box component="form" action="www.facebook.com">
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                color: "secondary.light",
                display: "flex",
                gap: 2,
                borderRadius: 4,
                paddingY: 2,
                marginBottom: 2,
              }}
            >
              <img src="./pictures/facebook.png" alt="" />
              <Typography sx={{ color: "secondary.dark" }}>
                Continue with Facebook
              </Typography>
            </Button>
          </Box>
          <Box component="form" action="www.google.com">
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                color: "secondary.light",
                display: "flex",
                gap: 2,
                borderRadius: 4,
                paddingY: 2,
                marginBottom: 2,
              }}
            >
              <img src="./pictures/search.png" alt="" />
              <Typography sx={{ color: "secondary.dark" }}>
                Continue with Google
              </Typography>
            </Button>
          </Box>
          <Box component="form" action="www.apple.com">
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                color: "secondary.light",
                display: "flex",
                gap: 2,
                borderRadius: 4,
                paddingY: 2,
                marginBottom: 2,
              }}
            >
              <img src="./pictures/apple.png" alt="" />
              <Typography sx={{ color: "secondary.dark" }}>
                Continue with Apple
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            marginTop: 5,
          }}
        >
          <Typography
            sx={{ borderTop: 1, width: 150, color: "secondary.light" }}
          ></Typography>
          <Typography sx={{ textAlign: "center" }}> or </Typography>
          <Typography
            sx={{ borderTop: 1, width: 150, color: "secondary.light" }}
          ></Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <Button
            onClick={routeChangeButton}
            variant="contained"
            sx={{ borderRadius: 7, width: 1, paddingY: 2 }}
          >
            Sign in
          </Button>
        </Box>
        <Typography
          sx={{
            color: "secondary.main",
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          Don't have an account ?
          <a href="./SetProfile" style={{ textDecoration: "none" }}>
            Sign up
          </a>
        </Typography>
      </ThemeProvider>
    </>
  );
};
export default ShouldLogin;

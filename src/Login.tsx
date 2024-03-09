import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { instance } from "./App";
type LoginType = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginType>();

  const handleLogin = async (data: LoginType) => {
    try {
      const res = await instance.post("/Login", data);
      console.log(res);
      if (res.data.token) {
        Cookies.set("token", res.data.token);
        instance.defaults.headers.Authorization = Cookies.get("token");
        toast.success("welcome");
        navigate("/Home", { state: { data: "loggedIn" } });
      }
    } catch (err) {
      toast.error("Something is wrong");
    }
  };
  const theme = createTheme({
    palette: {
      primary: { light: "#42a5f5", main: "#1976d2", dark: "#2196f3" },
      secondary: { light: "#e0e0e0", main: "#9e9e9e", dark: "#424242" },
    },
  });
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/ShouldLogin";
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
            <img src="./pictures/back.png" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            marginTop: 5,
          }}
        >
          <Box component="img" src="./pictures/healthcare4.png"></Box>
        </Box>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            marginBottom: 6,
          }}
        >
          Login to your Account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleLogin)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 3,
            paddingX: 2,
          }}
        >
          <TextField
            placeholder="email"
            variant="standard"
            style={{
              background: "#f5f5f5",
              padding: "12px",
              borderRadius: "15px",
            }}
            InputLabelProps={{ sx: { paddingLeft: "20px" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src="./pictures/envelope1.png" alt="" />
                </InputAdornment>
              ),
              disableUnderline: true,
              ...register("email"),
            }}
          />
          <TextField
            placeholder="Password"
            variant="standard"
            style={{
              background: "#f5f5f5",
              paddingBottom: "10px",
              borderRadius: "15px",
              paddingLeft: "10px",
              paddingRight: "20px",
              paddingTop: "10px",
            }}
            InputLabelProps={{ sx: { paddingLeft: "20px" } }}
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src="./pictures/lock2.png" alt="" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <img src="./pictures/invisible.png" />
                    ) : (
                      <img src="./pictures/view.png" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
              ...register("password"),
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Remember me</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ borderRadius: 7, width: 1, paddingY: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
        <a
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            color: "primary.main",
            fontSize: "20px",
          }}
          href=""
        >
          Forget the password ?
        </a>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            marginTop: 4,
            marginBottom: 3,
          }}
        >
          <Typography
            sx={{ borderTop: 1, width: 100, color: "secondary.light" }}
          ></Typography>
          <Typography sx={{ textAlign: "center", color: "secondary.main" }}>
            or continue with
          </Typography>
          <Typography
            sx={{ borderTop: 1, width: 100, color: "secondary.light" }}
          ></Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{ paddingY: "20px", paddingX: 5, borderRadius: 3 }}
          >
            <img src="./pictures/facebook.png" alt="" />
          </Button>
          <Button
            variant="outlined"
            sx={{ paddingY: "20px", paddingX: 5, borderRadius: 3 }}
          >
            <img src="./pictures/search.png" alt="" />
          </Button>
          <Button
            variant="outlined"
            sx={{ paddingY: "20px", paddingX: 5, borderRadius: 3 }}
          >
            <img src="./pictures/apple.png" alt="" />
          </Button>
        </Box>
        <Typography
          sx={{
            color: "secondary.main",
            display: "flex",
            justifyContent: "center",
            marginTop: 3,
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
export default Login;

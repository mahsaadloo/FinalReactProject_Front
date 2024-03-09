import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "./Navbar";
import { instance } from "./App";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SetProfileType } from "./SetProfile";
import React from "react";

const SetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { register, handleSubmit, watch } = useForm<SetProfileType>();

  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/SetProfile";
    navigate(path);
  };

  return (
    <>
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
          <img src="./pictures/back.png" alt="" />
        </IconButton>
        <Typography sx={{ fontSize: "24px", fontWeight: 800 }}>
          Create Password
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Box
          component="img"
          src="./pictures/setpass.webp"
          sx={{ minWidth: 450 }}
        ></Box>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit((d) => {
          const profileData = new FormData();
          profileData.append("password", d.password);
          instance.post("/SetProfile", profileData);
          toast.success("Successful");
          navigate("/ShouldLogin");
        })}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 3,
          paddingX: 2,
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>
          Create your Password :
        </Typography>
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
        <TextField
          placeholder="Repeat Password"
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
            ...register("repeatPassword", {
              required: true,
              validate: (val: string) => {
                if (watch("password") != val) {
                  return toast.success(" Password and Repeat doesnt match !");
                }
              },
            }),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ borderRadius: "30px", paddingY: 2, marginTop: 10 }}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};
export default SetPassword;

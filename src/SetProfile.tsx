/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { instance } from "./App";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Navbar from "./Navbar";
import { Key, useState } from "react";

export type SetProfileType = {
  _id: Key | null | undefined;
  file: string;
  fullName: string;
  nickName: string;
  birth: string;
  email: string;
  gender: string;
  password: string;
  repeatPassword: string;
};

const SetProfile = () => {
  const [gender, setGender] = React.useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const { register, handleSubmit } = useForm<SetProfileType>();

  const navigate = useNavigate();

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
        <Box component="img" src="./pictures/back.png"></Box>
        <Typography sx={{ fontSize: "24px", fontWeight: 800 }}>
          Fill Your Profile
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit((d) => {
          const profileData = new FormData();
          profileData.append("fullName", d.fullName);
          profileData.append("nickName", d.nickName);
          profileData.append("birth", d.birth);
          profileData.append("email", d.email);
          profileData.append("gender", d.gender);
          profileData.append("file", files[0]);
          instance.post("/SetProfile", profileData);
          toast.success(" Please set your Password");
          navigate("/SetPassword");
        })}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 3,
          paddingX: 2,
        }}
      >
        <label htmlFor="avatarFile">
          <Avatar
            src="/broken-image.jpg"
            style={{
              display: "flex",
              justifyItems: "center",
              marginLeft: "100px",
              marginTop: "10px",
              width: "200px",
              height: "200px",
            }}
          />
        </label>
        <IconButton>
          <input
            type="file"
            id="avatarFile"
            style={{ display: "none" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFiles(event.target.files)
            }
          />
        </IconButton>
        <TextField
          placeholder="FullName"
          variant="standard"
          style={{
            background: "#f5f5f5",
            padding: "12px",
            borderRadius: "15px",
          }}
          InputLabelProps={{ sx: { paddingLeft: "20px" } }}
          InputProps={{ disableUnderline: true, ...register("fullName") }}
        />
        <TextField
          placeholder="NickName"
          variant="standard"
          style={{
            background: "#f5f5f5",
            padding: "12px",
            borderRadius: "15px",
          }}
          InputLabelProps={{ sx: { paddingLeft: "20px" } }}
          InputProps={{ disableUnderline: true, ...register("nickName") }}
        />
        <TextField
          placeholder="Date of Birth"
          type="date"
          variant="standard"
          style={{
            background: "#f5f5f5",
            padding: "12px",
            borderRadius: "15px",
          }}
          InputLabelProps={{ sx: { paddingLeft: "20px" } }}
          InputProps={{ disableUnderline: true, ...register("birth") }}
        />
        <TextField
          placeholder="email"
          variant="standard"
          style={{
            background: "#f5f5f5",
            padding: "12px",
            borderRadius: "15px",
            paddingRight: "10px",
          }}
          InputLabelProps={{ sx: { paddingLeft: "20px" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                <img src="./pictures/envelope1.png" alt="" />
              </InputAdornment>
            ),
            disableUnderline: true,
            ...register("email"),
          }}
        />
        {/* <TextField label="Gender" variant='standard' style={{ background: "#f5f5f5", paddingBottom: "20px", borderRadius: "20px", paddingLeft: "10px"}} InputLabelProps={{sx: {paddingLeft: "20px"}}} InputProps={{disableUnderline: true,...register("gender")}} /> */}
        <Box>
          <FormControl fullWidth>
            <InputLabel id="gender"> Gender </InputLabel>
            <Select
              labelId="gender"
              label="Gender"
              value={gender}
              onChange={handleChange}
              style={{
                background: "#f5f5f5",
                borderRadius: "20px",
                paddingLeft: "10px",
              }}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ borderRadius: "30px", paddingY: 2, marginTop: 10 }}
        >
          {" "}
          Continue{" "}
        </Button>
      </Box>
    </>
  );
};

export default SetProfile;

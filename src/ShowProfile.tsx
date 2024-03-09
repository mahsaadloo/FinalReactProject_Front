/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { instance } from "./App";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { SetProfileType } from "./SetProfile";
import { Link } from "react-router-dom";

const ShowProfile = () => {
  // mikham azin estefade knm amma nmishe :))
  const { id } = useParams();
  const [Setprofile, setSetProfile] = useState([]);

  useEffect(() => {
    instance.get("/ShowProfile").then((res) => {
      setSetProfile(res.data.data);
    });
  }, []);

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
          {" "}
          Fill Your Profile
        </Typography>
      </Box>
      {Setprofile.map((p: SetProfileType) => (
        <Link to={`/ShowProfile/${p._id}`}>
          (
          <Box key={p._id} component="div">
            <IconButton>
              <Avatar
                src={"http://127.0.0.1:3001" + p.file}
                style={{
                  margin: "10px",
                  width: "200px",
                  height: "200px",
                }}
              />
            </IconButton>
            <TextField
              value={p.fullName}
              variant="standard"
              style={{
                background: "#f5f5f5",
                paddingBottom: "10px",
                borderRadius: "20px",
                paddingLeft: "10px",
              }}
              InputLabelProps={{ sx: { paddingLeft: "20px" } }}
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              value={p.nickName}
              variant="standard"
              style={{
                background: "#f5f5f5",
                paddingBottom: "10px",
                borderRadius: "20px",
                paddingLeft: "10px",
              }}
              InputLabelProps={{ sx: { paddingLeft: "20px" } }}
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              type="date"
              value={p.birth}
              variant="standard"
              style={{
                background: "#f5f5f5",
                padding: "12px",
                borderRadius: "20px",
              }}
              InputLabelProps={{ sx: { paddingLeft: "20px" } }}
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              value={p.email}
              variant="standard"
              style={{
                background: "#f5f5f5",
                paddingBottom: "10px",
                borderRadius: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              InputLabelProps={{ sx: { paddingLeft: "20px" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src="./pictures/envelope1.png" alt="" />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
            <TextField
              value={p.gender}
              variant="standard"
              style={{
                background: "#f5f5f5",
                paddingBottom: "20px",
                borderRadius: "20px",
                paddingLeft: "10px",
              }}
              InputLabelProps={{ sx: { paddingLeft: "20px" } }}
              InputProps={{ disableUnderline: true }}
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
          )
        </Link>
      ))}
    </>
  );
};

export default ShowProfile;

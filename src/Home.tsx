import { Avatar, Box, Button, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { instance } from "./App";
import { Link, useNavigate } from "react-router-dom";
import { SetProfileType } from "./SetProfile";

const Home = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/Favorites";
    navigate(path);
  };
  const [SetProfiles, setSetProfiles] = useState([]);
  useEffect(() => {
    instance.get("/Home").then((res) => {
      setSetProfiles(res.data.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          marginTop: 3,
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: 3 }}
        >
          {SetProfiles?.map((p: SetProfileType) => (
            <Link to={`/${p._id}`}>
              <Avatar
                key={p._id}
                src={"http://127.0.0.1:3001" + p.file}
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </Link>
          ))}
          <Box>
            <Typography sx={{ color: "GrayText" }}>
              Good Morning
              <Box component="img" src="./pictures/wave.png"></Box>
            </Typography>
            {SetProfiles?.map((p: SetProfileType) => (
              <Link to={`/${p._id}`}>
                <Typography
                  key={p._id}
                  sx={{ fontWeight: "700", fontSize: "22px" }}
                >
                  {p.fullName}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box component="img" src="./pictures/bell.png"></Box>
          <IconButton onClick={routeChange}>
            <Box component="img" src="./pictures/heart.png"></Box>
          </IconButton>
        </Box>
      </Box>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#eeeeee",
          marginTop: 3,
          borderRadius: 3,
        }}
      >
        <IconButton sx={{ p: "10px" }}>
          <img src="./pictures/magnify.png" alt="" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Paper>
      <Paper
        component="div"
        sx={{
          alignItems: "center",
          marginTop: 3,
          borderRadius: 3,
          backgroundImage: 'url("./pictures/doctor.avif")',
          backgroundRepeat: "no-repeat",
          height: 230,
        }}
      >
        <Typography sx={{ fontSize: "24px", paddingTop: 5, paddingLeft: 4 }}>
          Medical Checks!
        </Typography>
        <Box sx={{ paddingLeft: 4, marginTop: 2 }}>
          <Typography sx={{ fontSize: "12px" }}>
            Check your health condition regularly
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            to minimize the incidence of diseas in
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>the future</Typography>
        </Box>
        <Box sx={{ paddingLeft: 4, marginTop: 2 }}>
          <Button variant="outlined" sx={{ borderRadius: 5 }}>
            Check Now
          </Button>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          marginTop: 1,
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Doctor speciality
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          <a href="" style={{ textDecoration: "none" }}>
            See All
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          marginX: 4,
          marginY: 2,
        }}
      >
        <Box>
          <Box component="img" src="./pictures/people.png"></Box>
          <Typography>General..</Typography>
        </Box>
        <Box>
          <Box component="img" src="./pictures/tooth.png"></Box>
          <Typography>Dentist</Typography>
        </Box>
        <Box>
          <Box component="img" src="./pictures/eye.png"></Box>
          <Typography>Ophthal..</Typography>
        </Box>
        <Box>
          <Box component="img" src="./pictures/fruit.png"></Box>
          <Typography>Nutrition..</Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 4, marginX: 4 }}
      >
        <Box>
          <Box component="img" src="./pictures/brainstorm.png"></Box>
          <Typography>Neurolo..</Typography>
        </Box>
        <Box>
          <Box component="img" src="./pictures/baby.png"></Box>
          <Typography>Pediatric</Typography>
        </Box>
        <Box>
          <Box component="img" src="./pictures/x-ray.png"></Box>
          <Typography>Radiolo..</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src="./pictures/more.png"></Box>
          <Typography>More</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          marginTop: 2,
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Top Doctors
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          <a href="" style={{ textDecoration: "none" }}>
            See All
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          paddingLeft: 2,
          marginTop: 1,
          justifyContent: "center",
        }}
      >
        <Button variant="contained" sx={{ borderRadius: 5 }}>
          All
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 5, border: "2px solid", paddingX: 2 }}
        >
          General
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 5, border: "2px solid", paddingX: 2 }}
        >
          Dentist
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 5, border: "2px solid", paddingX: 2 }}
        >
          Nutritionist
        </Button>
      </Box>
      <Footer />
    </>
  );
};
export default Home;

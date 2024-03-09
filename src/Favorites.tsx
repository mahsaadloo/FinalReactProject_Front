import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, IconButton, Paper, Typography } from "@mui/material";

const Favorites = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/";
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
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={routeChange}>
            <img src="./pictures/back.png" />
          </IconButton>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            My Favorite Doctors
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", paddingRight: 1 }}>
          <IconButton>
            <img src="./pictures/searchhh.png" />
          </IconButton>
          <IconButton>
            <img src="./pictures/moreee.png" />
          </IconButton>
        </Box>
      </Box>
      <Paper
        component="div"
        sx={{ padding: 2, display: "flex", borderRadius: 3, marginTop: 3 }}
      >
        <Paper
          component="div"
          sx={{
            borderRadius: 3,
            backgroundImage: 'url("./pictures/doc4.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 100,
            width: 100,
          }}
        ></Paper>
        <Box sx={{ marginLeft: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography sx={{ fontWeight: "600" }}>
              {" "}
              Dr. Travis Westaby
            </Typography>
            <Box component="img" src="./pictures/fav.png"></Box>
          </Box>
          <Box sx={{ borderTop: "1px solid #eeeeee", marginTop: 1 }}></Box>
          <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
            <Typography sx={{ fontSize: "12px" }}>Cardiologists</Typography>
            <Typography sx={{ fontSize: "12px" }}>|</Typography>
            <Typography sx={{ fontSize: "12px" }}>Alka Hospital</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <Box component="img" src="./pictures/rating.png"></Box>
            <Typography sx={{ fontSize: "12px" }}>4.3</Typography>
            <Typography sx={{ fontSize: "12px" }}>(5,367 reviews)</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        component="div"
        sx={{ padding: 2, display: "flex", borderRadius: 3, marginTop: 3 }}
      >
        <Paper
          component="div"
          sx={{
            borderRadius: 3,
            backgroundImage: 'url("./pictures/doc1.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 100,
            width: 100,
          }}
        ></Paper>
        <Box sx={{ marginLeft: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography sx={{ fontWeight: "600" }}>
              {" "}
              Dr. Nathaniel Valle
            </Typography>
            <Box component="img" src="./pictures/fav.png"></Box>
          </Box>
          <Box sx={{ borderTop: "1px solid #eeeeee", marginTop: 1 }}></Box>
          <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
            <Typography sx={{ fontSize: "12px" }}>Cardiologists</Typography>
            <Typography sx={{ fontSize: "12px" }}>|</Typography>
            <Typography sx={{ fontSize: "12px" }}>B&B Hospital</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <Box component="img" src="./pictures/rating.png"></Box>
            <Typography sx={{ fontSize: "12px" }}>4.6</Typography>
            <Typography sx={{ fontSize: "12px" }}>(3,837 reviews)</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        component="div"
        sx={{ padding: 2, display: "flex", borderRadius: 3, marginTop: 3 }}
      >
        <Paper
          component="div"
          sx={{
            borderRadius: 3,
            backgroundImage: 'url("./pictures/doc2.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 100,
            width: 100,
          }}
        ></Paper>
        <Box sx={{ marginLeft: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography sx={{ fontWeight: "600" }}>
              Dr. Beckett Calger
            </Typography>
            <Box component="img" src="./pictures/fav.png"></Box>
          </Box>
          <Box sx={{ borderTop: "1px solid #eeeeee", marginTop: 1 }}></Box>
          <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
            <Typography sx={{ fontSize: "12px" }}>Cardiologists</Typography>
            <Typography sx={{ fontSize: "12px" }}>|</Typography>
            <Typography sx={{ fontSize: "12px" }}>Venus Hospital</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <Box component="img" src="./pictures/rating.png"></Box>
            <Typography sx={{ fontSize: "12px" }}>4.4</Typography>
            <Typography sx={{ fontSize: "12px" }}>(4,942 reviews)</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        component="div"
        sx={{ padding: 2, display: "flex", borderRadius: 3, marginTop: 3 }}
      >
        <Paper
          component="div"
          sx={{
            borderRadius: 3,
            backgroundImage: 'url("./pictures/doc5.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 100,
            width: 100,
          }}
        ></Paper>
        <Box sx={{ marginLeft: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography sx={{ fontWeight: "600" }}>Dr. Jada Srnsky</Typography>
            <Box component="img" src="./pictures/fav.png"></Box>
          </Box>
          <Box sx={{ borderTop: "1px solid #eeeeee", marginTop: 1 }}></Box>
          <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
            <Typography sx={{ fontSize: "12px" }}>Cardiologists</Typography>
            <Typography sx={{ fontSize: "12px" }}>|</Typography>
            <Typography sx={{ fontSize: "12px" }}>Bir Hospital</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <Box component="img" src="./pictures/rating.png"></Box>
            <Typography sx={{ fontSize: "12px" }}>4.6</Typography>
            <Typography sx={{ fontSize: "12px" }}>(5,366 reviews)</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        component="div"
        sx={{ padding: 2, display: "flex", borderRadius: 3, marginTop: 3 }}
      >
        <Paper
          component="div"
          sx={{
            borderRadius: 3,
            backgroundImage: 'url("./pictures/doc6.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 100,
            width: 100,
          }}
        ></Paper>
        <Box sx={{ marginLeft: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Typography sx={{ fontWeight: "600" }}>
              {" "}
              Dr. Travis Westaby
            </Typography>
            <Box component="img" src="./pictures/fav.png"></Box>
          </Box>
          <Box sx={{ borderTop: "1px solid #eeeeee", marginTop: 1 }}></Box>
          <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
            <Typography sx={{ fontSize: "12px" }}>Cardiologists</Typography>
            <Typography sx={{ fontSize: "12px" }}>|</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              The Valley Hospital
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <Box component="img" src="./pictures/rating.png"></Box>
            <Typography sx={{ fontSize: "12px" }}>4.8</Typography>
            <Typography sx={{ fontSize: "12px" }}>(3,279 reviews)</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default Favorites;

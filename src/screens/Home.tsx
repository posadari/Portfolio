import { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import BasicChips from "../components/Skills";
import avatar from "../images/avatar.jpg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ marginTop: "10%" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              mx: { xs: 2, sm: 4 },
              my: 2,
              p: 2,
              width: "100%",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.8s ease-out",
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              color="white"
              sx={{ textAlign: "center" }}
            >
              Arielle <br />
              Posadas
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="white"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Software Engineer
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              color="white"
              sx={{ textAlign: "center" }}
            >
              A computer science graduate from UT Dallas, currently working at
              Capital One.
            </Typography>
            <BasicChips />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              mx: { xs: 2, sm: 4 },
              my: 2,
              p: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                border: "1px solid white",
                padding: 20,
                borderRadius: "4px",
                transform: isVisible ? "translateX(0)" : "translateX(-120%)",
                transition: "transform 0.8s ease-out",
              }}
              src={avatar}
              alt="Avatar"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
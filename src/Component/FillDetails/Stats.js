import { Box, Card, CircularProgress, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        size={120}
        thickness={6}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          color="text.secondary"
          sx={{ fontSize: "24px" }}
        >
          {`${Math.round(props?.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function Stats({ value }) {
  return (
    <Grid item xs={5}>
      <Card
        sx={{
          p: 2,
          py: 5,
          backgroundColor: "#E9D8FF",
          borderRadius: "30px",
          maxWidth: "350px",
          ml: "auto",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <CircularProgressWithLabel value={value} />
        </Box>
        <Box sx={{ width: "70%", m: "auto", mt: 2 }}>
          <Box sx={{ display: "flex", pt: 1 }}>
            <Typography variant="body1" sx={{ flex: 1 }}>
              Personal details
            </Typography>
            <CheckCircleOutlineIcon />
          </Box>
          <Box sx={{ display: "flex", pt: 1 }}>
            <Typography variant="body1" sx={{ flex: 1 }}>
              Skills
            </Typography>
            <CheckCircleOutlineIcon />
          </Box>
          <Box sx={{ display: "flex", pt: 1 }}>
            <Typography variant="body1" sx={{ flex: 1 }}>
              Experience
            </Typography>
            <CheckCircleOutlineIcon />
          </Box>
          <Box sx={{ display: "flex", pt: 1 }}>
            <Typography variant="body1" sx={{ flex: 1 }}>
              Project details
            </Typography>
            <CheckCircleOutlineIcon />
          </Box>
          <Box sx={{ display: "flex", pt: 1 }}>
            <Typography variant="body1" sx={{ flex: 1 }}>
              Education
            </Typography>
            <CheckCircleOutlineIcon />
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Stats;

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddIcon from "@mui/icons-material/Add";

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
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function Experience() {
  const [profileData, setProfileData] = useState({});
  const handleInput = (e) => {
    console.log(profileData);
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.textContent,
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Experience</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Divider>
                <Typography variant="body2">Section 3</Typography>
              </Divider>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "end" }}>
              <Button variant="contained" startIcon={<AddIcon />}>
                Add
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Company / Employer"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Position" size="small" fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="From"
                      size="small"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="To"
                      size="small"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Description"
                      size="small"
                      fullWidth
                      multiLine
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(81, 13, 225, 0.64)",
                  color: "white",
                }}
                endIcon={<EastOutlinedIcon />}
                href="/project-details"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
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
              <CircularProgressWithLabel value={"75"} />
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
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Experience;

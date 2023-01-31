import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

function PersonalDetails() {
  const [profileData, setProfileData] = useState({});
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Personal details</Typography>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Divider>
                <Typography variant="body2">Section 1</Typography>
              </Divider>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              <Button
                startIcon={<MaleIcon />}
                variant="contained"
                sx={{ mr: 2 }}
              >
                Male
              </Button>
              <Button startIcon={<FemaleIcon />} variant="contained">
                Female
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Upload Profile Pic
              </Typography>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-profile-button"
                hidden
                type="file"
              />
              <label htmlFor="upload-profile-button">
                <Button
                  variant="contained"
                  endIcon={<CloudUploadOutlinedIcon />}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter full name
              </Typography>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Email address
              </Typography>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Linkedin url
              </Typography>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#B57EDC", color: "white" }}
                endIcon={<EastOutlinedIcon />}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ p: 2 }}>Process</Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PersonalDetails;

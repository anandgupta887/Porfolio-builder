import {
  Avatar,
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
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';

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

function PersonalDetails() {
  const [profileData, setProfileData] = useState({});
  const handleButton = (e) => {
    console.log(profileData);
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.textContent,
    });
  };

  const handleInput = (e) => {
    console.log(profileData);
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageSelect = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setProfileData({
        ...profileData,
        profile: reader.result,
      });
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Personal details</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Divider>
                <Typography variant="body2">Section 1</Typography>
              </Divider>
            </Grid>
            <Grid item xs={6}>
              <Button
                name="gender"
                startIcon={<MaleIcon />}
                variant="contained"
                sx={{
                  mr: 2,
                  backgroundColor: `${
                    profileData.gender === "Male" ? "#E9D8FF" : "#F6EFFF"
                  }`,
                  borderRadius: "15px",
                  fontSize: "24px",
                  textTransform: "none",
                }}
                fullWidth
                onClick={handleButton}
              >
                Male
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                name="gender"
                startIcon={<FemaleIcon />}
                variant="contained"
                sx={{
                  backgroundColor: `${
                    profileData.gender === "Female" ? "#E9D8FF" : "#F6EFFF"
                  }`,
                  borderRadius: "15px",
                  fontSize: "24px",
                  textTransform: "none",
                }}
                fullWidth
                onClick={handleButton}
              >
                Female
              </Button>
            </Grid>
            {/* <Grid item xs={12} sx={{ display: "flex" }}>
              <Button
                name="gender"
                startIcon={<MaleIcon />}
                variant="contained"
                sx={{
                  mr: 2,
                  backgroundColor: `${
                    profileData.gender === "Male" ? "#E9D8FF" : "#F6EFFF"
                  }`,
                  borderRadius: "15px",
                  fontSize: "24px",
                  textTransform: "none",
                }}
                onClick={handleInput}
              >
                Male
              </Button>
              <Button
                name="gender"
                startIcon={<FemaleIcon />}
                variant="contained"
                sx={{
                  backgroundColor: `${
                    profileData.gender === "Female" ? "#E9D8FF" : "#F6EFFF"
                  }`,
                  borderRadius: "15px",
                  fontSize: "24px",
                  textTransform: "none",
                }}
                onClick={handleInput}
              >
                Female
              </Button>
            </Grid> */}
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Upload Profile Pic
              </Typography>

              {profileData.profile ? (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Avatar
                    src={profileData.profile}
                    sx={{ width: 56, height: 56 }}
                  />
                  <div>
                    <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                      onClick={() => {
                        setProfileData({
                          ...profileData,
                          profile: "",
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload-profile-button"
                    hidden
                    type="file"
                    onChange={handleImageSelect}
                  />
                  <label htmlFor="upload-profile-button">
                    <Button
                      variant="contained"
                      startIcon={<CloudUploadOutlinedIcon />}
                      component="span"
                      sx={{ backgroundColor: "rgba(217, 209, 209, 1)" }}
                    >
                      Upload
                    </Button>
                  </label>
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Full name
              </Typography>
              <TextField
                name="fullName"
                size="small"
                fullWidth
                placeholder="Eg. John Doe"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Email address
              </Typography>
              <TextField
                size="small"
                name="email"
                onChange={handleInput}
                fullWidth
                placeholder="Eg. contact@port4leo.com"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Linkedin url
              </Typography>
              <TextField
                size="small"
                name="linkedInUrl"
                onChange={handleInput}
                fullWidth
                placeholder="Eg. https://www.linkedin.com/Port4leo"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(81, 13, 225, 0.64)",
                  color: "white",
                }}
                endIcon={<EastOutlinedIcon />}
                href="/skills"
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
              <CircularProgressWithLabel value={"0"} />
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

export default PersonalDetails;

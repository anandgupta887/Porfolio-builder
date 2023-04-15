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
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Stats from "./Stats";
import BottomButton from "./BottomButton";
import axios from "axios";

function PersonalDetails() {
  const [profileData, setProfileData] = useState({});

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, title, linkedIn, github, email, phone, profile } =
        profileData;

      const response = await axios
        .post(
          "http://localhost:4000/profiles",
          { name, title, linkedIn, github, email, phone, image: "profile" },
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAMTIzLmNvbSIsImlhdCI6MTY4MTU3NDQwMX0.lRN2u05joZT8ZKi6CYqvafxytZli-HdnVlvM_K0VGMU",
            },
          }
        )
        .then((response) => {
          console.log(`Welcome back, ${response}`);
          window.location.pathname = "/skills";
        });
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Personal details</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider>
                <Typography variant="body2">Section 1</Typography>
              </Divider>
            </Grid>

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
                    sx={{ width: 80, height: 80 }}
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
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Full name
              </Typography>
              <TextField
                name="name"
                size="small"
                fullWidth
                placeholder="Eg. John Doe"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Profile title
              </Typography>
              <TextField
                name="title"
                size="small"
                fullWidth
                placeholder="Eg. React JS developer"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Linkedin URL
              </Typography>
              <TextField
                size="small"
                name="linkedIn"
                onChange={handleInput}
                fullWidth
                placeholder="Eg. https://linkedin.com/Port4leo"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Github URL
              </Typography>
              <TextField
                size="small"
                name="github"
                onChange={handleInput}
                fullWidth
                placeholder="Eg. https://github.com/Port4leo"
              />
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter Phone number
              </Typography>
              <TextField
                size="small"
                name="phone"
                onChange={handleInput}
                fullWidth
                placeholder="Eg. 987645912"
              />
            </Grid>
            <Grid item xs={12}>
              <BottomButton nextLink="/skills" nextSubmit={handleOnSubmit} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={0} />
      </Grid>
    </Container>
  );
}

export default PersonalDetails;

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
import { skillsApiKey } from "../config/config";
import Stats from "./Stats";
import BottomButton from "./BottomButton";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Skills() {
  const [values, setValues] = useState([]);

  const userData = useSelector((state) => state.user.resume.skills);

  console.log(userData, values);

  useEffect(() => {
    setValues(userData);
  }, [userData]);

  const [options, setOptions] = useState([]);
  const [defaultOptions, setDefaultOptions] = useState([
    "Java",
    "C++",
    "C",
    "python",
  ]);
  const handleInput = (e) => {
    if (e.target.value === "") {
      return;
    }
    const url = `https://api.promptapi.com/skills?q=${e.target.value}`;
    fetch(url, {
      method: "GET",
      headers: {
        apikey: skillsApiKey,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const handleDelete = (idx) => {
    let arr = values;
    arr.splice(idx, 1);
    setValues([...arr]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "http://localhost:4000/skills",
          { skills: values },
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAMTIzLmNvbSIsImlhdCI6MTY4MTU3NDQwMX0.lRN2u05joZT8ZKi6CYqvafxytZli-HdnVlvM_K0VGMU",
            },
          }
        )
        .then((response) => {
          console.log(`Welcome back, ${response}`);
          window.location.pathname = "/experience";
        });
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Skills</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider>
                <Typography variant="body2">Section 2</Typography>
              </Divider>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                fullWidth
                options={options.length > 0 ? options : defaultOptions}
                onChange={(e) => {
                  if (e.target.textContent === "") return;
                  setValues([...values, { name: e.target.textContent }]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Skills"
                    placeholder="Type your skills"
                    onChange={handleInput}
                  />
                )}
              />
            </Grid>
            {values.length > 0 && (
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Your skills
                  </Typography>
                  <Box sx={{ mt: -1, ml: -1 }}>
                    {values.map((data, idx) => (
                      <Chip
                        label={data.name}
                        key={idx}
                        sx={{ ml: 1, mt: 1 }}
                        onClick={() => {}}
                        onDelete={() => {
                          handleDelete(idx);
                        }}
                        deleteIcon={<DeleteIcon />}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            )}

            <Grid item xs={12}>
              <BottomButton
                nextSubmit={handleOnSubmit}
                nextLink="/experience"
                prevLink="/personal-details"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={25} />
      </Grid>
    </Container>
  );
}

export default Skills;

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

function Skills() {
  const [values, setValues] = useState(["Html", "CSS", "JS"]);
  const [options, setOptions] = useState([]);
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

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Skills</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
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
                options={options}
                onChange={(e) => {
                  if (e.target.textContent === "") return;
                  setValues([...values, e.target.textContent]);
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
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Your skills
                </Typography>
                <Box>
                  {values.map((data) => (
                    <Chip
                      label={data}
                      sx={{ ml: 1, mt: 1 }}
                      onClick={() => {}}
                      onDelete={() => {}}
                      deleteIcon={<DeleteIcon />}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <BottomButton
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

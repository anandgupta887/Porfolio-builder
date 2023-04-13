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
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import AddIcon from "@mui/icons-material/Add";
import Stats from "./Stats";
import BottomButton from "./BottomButton";

function Experience() {
  const [values, setValues] = useState([{}]);
  const [inputCount, setInputCount] = useState(1);

  //handles adding new input section
  const handleAddNewInput = (e) => {
    e.preventDefault();
    let count = inputCount + 1;
    setValues([
      ...values,
      {
        id: `${count}`,
        type: "",
        name: "",
      },
    ]);
    setInputCount(inputCount + 1);
  };

  //handles input for the input field
  const handleInput = (e, data, index) => {
    let arr = values;
    arr[index][e.target.name] = e.target.value;
    setValues(arr);
  };

  //delete input field
  const handleDeleteInput = (index) => {
    if (values.length > 1) {
      let arr = values;
      setValues(arr.filter((idx) => idx.id != index));
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Experience</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider>
                <Typography variant="body2">Section 3</Typography>
              </Divider>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "end" }}>
              <Button
                onClick={handleAddNewInput}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Grid>
            {values.map((data, idx) => (
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
            ))}

            <Grid item xs={12}>
              <BottomButton nextLink="/project-details" prevLink="/skills" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={50} />
      </Grid>
    </Container>
  );
}

export default Experience;

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
import Stats from "./Stats";
import BottomButton from "./BottomButton";

function ProjectDetails() {
  const [values, setValues] = useState([{}]);
  const [inputCount, setInputCount] = useState(1);

  //handles adding new input section
  const handleAddNewInput = (e) => {
    e.preventDefault();
    console.log(inputCount);
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
          <Typography variant="h4">Project details</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider>
                <Typography variant="body2">Section 4</Typography>
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
            {values.map(() => (
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField label="Title" size="small" fullWidth />
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
              <BottomButton prevLink="/experience" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={75} />
      </Grid>
    </Container>
  );
}

export default ProjectDetails;

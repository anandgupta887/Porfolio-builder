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

import DeleteIcon from "@mui/icons-material/Delete";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import Stats from "./Stats";
import BottomButton from "./BottomButton";

function ProjectDetails() {
  const [values, setValues] = useState([{}]);

  const handleAddNewInput = () => {
    setValues([...values, {}]);
  };

  const handleDeleteInput = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const handleInputChange = (index, event) => {
    console.log(values);
    const { name, value } = event.target;
    const updatedValues = [...values];
    updatedValues[index][name] = value;
    setValues(updatedValues);
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
              {values.length < 5 && (
                <Button
                  onClick={handleAddNewInput}
                  variant="contained"
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              )}
            </Grid>
            {values.map((value, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="title"
                        label="Title"
                        size="small"
                        fullWidth
                        value={value.title || ""}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="from"
                        label="From"
                        size="small"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={value.from || ""}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="to"
                        label="To"
                        size="small"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={value.to || ""}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="description"
                        label="Description"
                        size="small"
                        fullWidth
                        multiline
                        rows={4}
                        value={value.description || ""}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "end" }}>
                      <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteInput(index)}
                      >
                        Delete
                      </Button>
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

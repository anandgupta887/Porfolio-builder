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
import AddIcon from "@mui/icons-material/Add";
import Stats from "./Stats";
import BottomButton from "./BottomButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Experience() {
  const [values, setValues] = useState([
    { company: "", position: "", from: "", to: "", description: "" },
  ]);

  const handleAddNewInput = () => {
    setValues([
      ...values,
      { company: "", position: "", from: "", to: "", description: "" },
    ]);
  };

  const handleInputChange = (e, idx) => {
    const { name, value } = e.target;
    const updatedValues = [...values];
    updatedValues[idx][name] = value;
    setValues(updatedValues);
  };

  const handleDeleteInput = (idx) => {
    const updatedValues = [...values];
    updatedValues.splice(idx, 1);
    setValues(updatedValues);
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
                        name="company"
                        label="Company / Employer"
                        size="small"
                        fullWidth
                        value={data.company}
                        onChange={(e) => handleInputChange(e, idx)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="position"
                        label="Position"
                        size="small"
                        fullWidth
                        value={data.position}
                        onChange={(e) => handleInputChange(e, idx)}
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
                        value={data.from}
                        onChange={(e) => handleInputChange(e, idx)}
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
                        value={data.to}
                        onChange={(e) => handleInputChange(e, idx)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="description"
                        label="Description"
                        size="small"
                        fullWidth
                        multiline
                        rows={3}
                        value={data.description}
                        onChange={(e) => handleInputChange(e, idx)}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "end" }}>
                      <Button
                        onClick={() => handleDeleteInput(idx)}
                        variant="contained"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
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

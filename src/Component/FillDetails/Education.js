import {
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Stats from "./Stats";
import BottomButton from "./BottomButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Education() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [values, setValues] = useState([
    { degree: "", institution: "", field: "", from: "", to: "" },
  ]);

  const handleAddNewInput = () => {
    setValues([
      ...values,
      { degree: "", institution: "", field: "", from: "", to: "" },
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "http://localhost:4000/education",
          { education: values },
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAMTIzLmNvbSIsImlhdCI6MTY4MTU3NDQwMX0.lRN2u05joZT8ZKi6CYqvafxytZli-HdnVlvM_K0VGMU",
            },
          }
        )
        .then((response) => {
          console.log(`Welcome back, ${response}`);
          window.location.pathname = "/";
        });
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Education</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider>
                <Typography variant="body2">Section 5</Typography>
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

            {values.map((data, idx) => (
              <Grid item xs={12} key={idx}>
                <Accordion
                  expanded={expanded === `panel${idx + 1}`}
                  onChange={handleChange(`panel${idx + 1}`)}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Box sx={{ display: "flex", width: "100%" }}>
                      <Typography sx={{ flex: 1, alignSelf: "center" }}>
                        {`Education ${idx + 1}`}
                      </Typography>
                      {values.length > 1 && (
                        <IconButton onClick={() => handleDeleteInput(idx)}>
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          name="degree"
                          label="Degree"
                          size="small"
                          fullWidth
                          value={data.company}
                          onChange={(e) => handleInputChange(e, idx)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="field"
                          label="Specialized in"
                          size="small"
                          fullWidth
                          value={data.position}
                          onChange={(e) => handleInputChange(e, idx)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="institution"
                          label="University / College name"
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
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
            <Grid item xs={12}>
              <BottomButton
                nextSubmit={handleOnSubmit}
                nextLink="/project-details"
                prevLink="/skills"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={50} />
      </Grid>
    </Container>
  );
}

export default Education;

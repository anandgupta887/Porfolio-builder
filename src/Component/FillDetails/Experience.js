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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateExperience } from "../../state/actions/userAction";
import { backendUrl } from "../config/config";
import { useHistory } from "react-router-dom";

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

function Experience() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const userData = useSelector((state) => state?.user?.experience);
  const userAuth = useSelector((state) => state?.token);

  const dispatch = useDispatch();

  const history = useHistory();

  const [values, setValues] = useState([
    {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      location: "",
    },
  ]);

  useEffect(() => {
    if (userData) {
      setValues(userData);
    }
  }, [userData]);

  const handleAddNewInput = () => {
    setValues([
      ...values,
      {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        description: "",
        location: "",
      },
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
      await axios
        .post(
          `${backendUrl}/experience`,
          { experience: values },
          {
            headers: {
              authorization: `Bearer ${userAuth}`,
            },
          }
        )
        .then((res) => {
          dispatch(updateExperience(res?.data?.experience));
          
          history.push("/project-details");
        });
    } catch (err) {
      alert(err.response.data.error);
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
                        {`Experience ${idx + 1}`}
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
                          name="title"
                          label="Position"
                          size="small"
                          fullWidth
                          value={data.title}
                          onChange={(e) => handleInputChange(e, idx)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="location"
                          label="Location"
                          placeholder="Eg. Remote"
                          size="small"
                          fullWidth
                          value={data.location}
                          onChange={(e) => handleInputChange(e, idx)}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="startDate"
                          label="From"
                          size="small"
                          type="date"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={data.startDate}
                          onChange={(e) => handleInputChange(e, idx)}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="endDate"
                          label="To"
                          size="small"
                          type="date"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={data.endDate}
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
        <Stats value={40} />
      </Grid>
    </Container>
  );
}

export default Experience;

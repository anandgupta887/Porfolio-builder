import {
  Autocomplete,
  Avatar,
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
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stats from "./Stats";
import BottomButton from "./BottomButton";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../../state/actions/userAction";
import { backendUrl } from "../config/config";
import { useHistory } from "react-router-dom/";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

function ProjectDetails() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [values, setValues] = useState([{}]);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state?.user?.projects);
  const userAuth = useSelector((state) => state?.token);

  const history = useHistory();

  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    if (userData) {
      setValues(userData);
    }
  }, [userData]);

  const handleAddNewInput = () => {
    setValues([...values, {}]);
  };

  const handleDeleteInput = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedValues = [...values];
    updatedValues[index][name] = value;
    setValues(updatedValues);
  };

  const handleImage = async (e, index) => {
    let files;
    if (e?.dataTransfer) {
      files = e?.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files && files.length > 0) {
      const imageData = files[0];
      handleUploadImage(imageData, index);
    }
  };

  const handleDelete = (index) => {
    const updatedValues = [...values];
    updatedValues[index]["imageRaw"] = null;
    updatedValues[index]["image"] = null;
    setValues(updatedValues);
  };

  const handleUploadImage = async (imageData, index) => {
    const storageRef = ref(storage, `portfolio/projects/${imageData.name}`);

    await uploadBytes(storageRef, imageData, imageData.type).then(
      async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((downloadURL) => {
          const updatedValues = [...values];
          updatedValues[index]["image"] = downloadURL;
          setValues(updatedValues);
        });
      }
    );
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          `${backendUrl}/projects`,
          { projects: values },
          {
            headers: {
              authorization: `Bearer ${userAuth}`,
            },
          }
        )
        .then((res) => {
          dispatch(updateProject(res?.data?.projects));

          history.push("/education");
        });
    } catch (err) {
      alert(err.response.data.error);
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
                    aria-controls={`panel${idx + 1}d-content`}
                    id={`panel${idx + 1}d-header`}
                  >
                    <Box sx={{ display: "flex", width: "100%" }}>
                      <Typography sx={{ flex: 1, alignSelf: "center" }}>
                        {`Project ${idx + 1}`}
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
                        {data?.image ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <img
                              src={data?.image}
                              style={{ width: "auto", height: 80 }}
                            />
                            <div>
                              <Button
                                variant="contained"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                  handleDelete(idx);
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              variant="body2"
                              sx={{ flex: 1, alignSelf: "center" }}
                            >
                              Upload image
                            </Typography>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="upload-profile-button"
                              hidden
                              type="file"
                              onChange={(e) => handleImage(e, idx)}
                            />
                            <label htmlFor="upload-profile-button">
                              <Button
                                variant="contained"
                                startIcon={<CloudUploadOutlinedIcon />}
                                component="span"
                                sx={{
                                  backgroundColor: "rgba(217, 209, 209, 1)",
                                }}
                              >
                                Upload
                              </Button>
                            </label>
                          </Box>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="title"
                          label="Title"
                          size="small"
                          fullWidth
                          value={data.title || ""}
                          onChange={(e) => handleInputChange(idx, e)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="link"
                          label="Link"
                          size="small"
                          fullWidth
                          value={data.link || ""}
                          onChange={(e) => handleInputChange(idx, e)}
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
                          value={data.from || ""}
                          onChange={(e) => handleInputChange(idx, e)}
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
                          value={data.to || ""}
                          onChange={(e) => handleInputChange(idx, e)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="projectDescription"
                          label="Description"
                          size="small"
                          fullWidth
                          multiline
                          rows={3}
                          value={data.projectDescription || ""}
                          onChange={(e) => handleInputChange(idx, e)}
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
                prevLink="/experience"
                nextLink="/education"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={60} />
      </Grid>
    </Container>
  );
}

export default ProjectDetails;

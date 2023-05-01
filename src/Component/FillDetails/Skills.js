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
import { backendUrl, skillsApiKey } from "../config/config";
import Stats from "./Stats";
import BottomButton from "./BottomButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateSkills } from "../../state/actions/userAction";
import { useHistory } from "react-router-dom";
import SelectInput from "@mui/material/Select/SelectInput";

function Skills() {
  const [values, setValues] = useState([]);

  const [localSkills, setLocalSkills] = useState({
    name: "",
  });

  const userData = useSelector((state) => state?.user?.skills);
  const userAuth = useSelector((state) => state?.token);

  const history = useHistory();

  useEffect(() => {
    if (userData?.length > 0) {
      setValues(userData);
    }
  }, [userData]);

  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);
  const [defaultOptions, setDefaultOptions] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Git",
    "Figma",
    "Sketch",
    "Adobe XD",
    "InvisionApp",
    "Photoshop",
  ]);
  // const handleInput = (e) => {
  //   if (e.target.value === "") {
  //     return;
  //   }
  //   const url = `https://api.promptapi.com/skills?q=${e.target.value}`;
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       apikey: skillsApiKey,
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setOptions(data));
  // };

  const handleInput = (e) => {
    if (e.target.name) {
      setLocalSkills({
        ...localSkills,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddToTheList = () => {
    setValues([...values, localSkills]);
    setLocalSkills({
      name: "",
      level: "",
    });
  };

  console.log(values, localSkills);

  const handleDelete = (idx) => {
    let arr = values;
    arr.splice(idx, 1);
    setValues([...arr]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${backendUrl}/skills`,
          { skills: values },
          {
            headers: {
              authorization: `Bearer ${userAuth}`,
            },
          }
        )
        .then((res) => {
          dispatch(updateSkills(res?.data?.skills));
          history.push("/experience");
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
            <Grid item xs={6}>
              {/* <TextField
                name="skill"
                label="Skill"
                variant="outlined"
                value={values[0]?.data}
                onChange={handleInput}
                size="small"
                fullWidth
              /> */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                fullWidth
                options={options?.length > 0 ? options : defaultOptions}
                onChange={(e) => {
                  if (e.target.textContent == "") return;
                  setLocalSkills({ name: e.target.textContent });
                }}
                value={localSkills.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Skills"
                    placeholder="Type your skills"
                    // onChange={handleInput}
                    value={localSkills.name}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                fullWidth
                label="Level"
                name="level"
                placeholder="Out of 5"
                onChange={handleInput}
                value={localSkills.level}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "end" }}>
              <Button variant="contained" onClick={handleAddToTheList}>
                Add to the list
              </Button>
            </Grid>
            {values?.length > 0 && (
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Your skills
                  </Typography>
                  <Box sx={{ mt: -1, ml: -1 }}>
                    {values.map((data, idx) => (
                      <Chip
                        label={`${data.name} -  ${
                          data.level ? data.level : ""
                        }`}
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
        <Stats value={20} />
      </Grid>
    </Container>
  );
}

export default Skills;

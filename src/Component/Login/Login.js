import {
  Box,
  Button,
  Card,
  Container,
  Input,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import "../../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import { validateEmail } from "../constant/commonFunction";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../state/actions/userAction";
import { useEffect } from "react";
import { backendUrl } from "../config/config";
import Popup from "../SnackBarPopup";
import { useHistory } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({});
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const userAuth = useSelector((state) => state.token);

  const handleOnInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // this is a state that will handle the state for visibility of snackbar
  const [snackbarState, setSnackbarState] = useState(false); // "false" is the initial "snackbarState"
  // this is the state to owns the data to be visible n kind of severity it has - success or error
  const [snackbarData, setSnackbarData] = useState({
    // the following is the initial "snackbarData"
    message: "",
    severity: "",
  });

  const handleOpenSnackbar = (severity, message) => {
    // this function is setting the states
    setSnackbarData({
      // changing initial/previous "snackbarState" to re-render the "Popup" component
      message: message,
      severity: severity,
    });
    setSnackbarState(true); // changing initial/previous "snackbarData" to re-render the "Popup" component
  };

  useEffect(() => {
    if (userAuth) {
      history.push("/choose-template");
    }
  }, []);

  const handleOnSubmit = async () => {
    if (!validateEmail(values?.email)) {
      return;
    }
    if (!(values?.email && values?.password)) {
      validateEmail(values?.email);
      setError(true);
      return;
    }
    try {
      await axios
        .post(`${backendUrl}/auth/login`, {
          email: values?.email,
          password: values?.password,
        })
        .then((res) => {
          dispatch(updateUserDetails(res.data));

          // On successfull login the below function calls the function to update all snackbar state to display
          handleOpenSnackbar("success", "Logged in successfully");
          history.push("/personal-details");
        });
    } catch (err) {
      // On error the below function calls the function to update all snackbar state to display
      handleOpenSnackbar("error", err.response.data.error);
    }
  };

  return (
    <>
      {/* This below components is adding the snackbar component to the page and passing the props  */}
      <Popup open={snackbarState} set={setSnackbarState} data={snackbarData} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: {
            xs: "auto",
            md: "calc(100vh - 65px - 32px)",
          },
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            p: "0 !important",
            display: "flex",
            m: "auto",
            height: { xs: "auto", md: "80vh" },
            boxShadow: {
              xs: "none",
              md: "11px 12px 13px 12px rgb(207, 207, 207)",
            },
          }}
        >
          <Box
            sx={{
              margin: "auto",
              flex: 1,
              alignSelf: "center",
              p: { xs: 0, md: 2 },
            }}
          >
            <Box sx={{ maxWidth: { xs: "400px" }, m: "auto" }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Welcome back!
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Please enter your details
              </Typography>
              <Input
                name="email"
                sx={{ p: 1, pb: 0, mb: 1 }}
                placeholder="Email"
                fullWidth
                onChange={handleOnInputChange}
                error={
                  (error && !values?.email) ||
                  (values?.email && !validateEmail(values?.email))
                }
              />
              <Input
                name="password"
                type="password"
                sx={{ p: 1, pb: 0, mb: 2 }}
                placeholder="Password"
                fullWidth
                onChange={handleOnInputChange}
                error={error && !values?.password}
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleOnSubmit}
                sx={{
                  mt: 1,
                  mb: 1,
                }}
              >
                Login
              </Button>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography></Typography>
                <Link href="/register">New user?</Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
            <img
              width="100%"
              style={{ height: "-webkit-fill-available" }}
              src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;

import {
  Box,
  Button,
  Card,
  Container,
  Input,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backendUrl } from "../config/config";
import { updateNewUser } from "../../state/actions/userAction";
import Popup from "../SnackBarPopup";
import { useHistory } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({});
  const [error, setError] = useState(false);

  const userAuth = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const history = useHistory();

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(`${backendUrl}/auth/signup`, {
          name: values.name,
          email: values.email,
          password: values.password,
          username: values.username,
        })
        .then((res) => {
          // On successfull login the below function calls the function to update all snackbar state to display
          handleOpenSnackbar("success", "Signed up successfully");
          dispatch(updateNewUser(res.data));

          history.push("/personal-details");
        });

      // dispatch(updateNewUser(response.data.token));
      // // Redirect to dashboard page
      // window.location.pathname = "/personal-details";
      // <Popup message="success" />;
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
            flexDirection: "row-reverse",
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
            <Box sx={{ maxWidth: { xs: "400px" }, margin: "auto" }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Welcome!
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Please enter your details to Register
              </Typography>
              <Input
                name="name"
                sx={{ p: 1, pb: 0, mb: 1 }}
                placeholder="Full name"
                fullWidth
                onChange={handleOnInputChange}
              />
              <Input
                name="username"
                sx={{ p: 1, pb: 0, mb: 1 }}
                placeholder="Username"
                fullWidth
                onChange={handleOnInputChange}
              />
              <Input
                name="email"
                sx={{ p: 1, pb: 0, mb: 1 }}
                placeholder="Email"
                fullWidth
                onChange={handleOnInputChange}
              />
              <Input
                name="password"
                type="password"
                sx={{ p: 1, pb: 0, mb: 2 }}
                placeholder="Password"
                fullWidth
                onChange={handleOnInputChange}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  mb: 1,
                  background: "transparent",
                  backgroundColor: "##9e9e9e",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#B57EDC",
                    color: "white",
                  },
                }}
                onClick={handleOnSubmit}
              >
                Register
              </Button>
              <Box sx={{ textAlign: "center" }}>
                Already registered? &nbsp;
                <Link href="/login">Login</Link>
              </Box>{" "}
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: { md: "flex", xs: "none" } }}>
            <img
              width="100%"
              style={{ height: "-webkit-fill-available" }}
              src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Register;

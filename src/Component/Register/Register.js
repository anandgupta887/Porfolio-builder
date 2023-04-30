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
import { useSelector } from "react-redux";
import Popup from "../Popup";

function Register() {
  const [values, setValues] = useState({});

  const userAuth = useSelector((state) => state.token);

  useEffect(() => {
    if (userAuth) {
      window.location.pathname = "/personal-details";
    }
  }, []);

  const handleOnInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
        username: values.username,
      });
      alert(response.data.message);
      // localStorage.setItem("token", response.data.token);
      // Redirect to dashboard page
      window.location.pathname = "/personal-details";
      <Popup message="success" />;
    } catch (err) {
      alert(err.response.data.error);
      <Popup message="error" />;
    }
  };

  return (
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
  );
}

export default Register;

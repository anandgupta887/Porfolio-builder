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

function Login() {
  const [values, setValues] = useState({});

  const handleOnInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: values.email,
        password: values.password,
      });
      // alert(response.data.message);
      alert(`Welcome back, ${response.data.name}`);
    } catch (err) {
      alert(err.response.data.error);
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
              Welcome back
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
              onClick={handleOnSubmit}
              sx={{
                mt: 1,
                mb: 1,
              }}
            >
              Login
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/forgot-password">Forgot password</Link>
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
  );
}

export default Login;

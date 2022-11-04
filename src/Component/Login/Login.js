import { Box, Button, Card, Input, Link, Typography } from "@mui/material";
import React from "react";
import "../../styles/Login.css";

function Login() {
  return (
    <Box sx={{ mx: 2 }}>
      <Box
        sx={{
          display: "flex",
          maxWidth: "980px",
          m: "auto",
          mt: 2,
          height: "calc(100vh - 150px)",
          boxShadow: "11px 12px 13px 12px rgb(207, 207, 207)",
        }}
      >
        <Box sx={{ flex: 1, mr: { xs: 0, md: 3 }, alignSelf: "center", p: 2 }}>
          <Box sx={{ maxWidth: { xs: "auto", md: "350px" }, margin: "auto" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Welcome back
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Please enter your details
            </Typography>
            <Input sx={{ p: 1, pb: 0, mb: 1 }} placeholder="Email" fullWidth />
            <Input
              type="password"
              sx={{ p: 1, pb: 0, mb: 2 }}
              placeholder="Password"
              fullWidth
            />
            <Button variant="contained" fullWidth sx={{ mt: 1, mb: 1 }}>
              Login
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/forgot-password">Forgot password</Link>
              <Link href="/register">New user ?</Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: { md: "flex", xs: "none" } }}>
          <img
            width="100%"
            style={{ height: "-webkit-fill-available" }}
            src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

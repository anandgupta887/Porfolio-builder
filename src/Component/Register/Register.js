import {
  Box,
  Button,
  Card,
  Container,
  Input,
  Link,
  Typography,
} from "@mui/material";

function Register() {
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
              sx={{ p: 1, pb: 0, mb: 1 }}
              placeholder="Full name"
              fullWidth
            />
            <Input
              sx={{ p: 1, pb: 0, mb: 1 }}
              placeholder="Username"
              fullWidth
            />
            <Input sx={{ p: 1, pb: 0, mb: 1 }} placeholder="Email" fullWidth />
            <Input
              type="password"
              sx={{ p: 1, pb: 0, mb: 2 }}
              placeholder="Password"
              fullWidth
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

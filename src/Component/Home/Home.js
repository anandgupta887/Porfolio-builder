import { Box, Button, Container, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Box sx={{ display: "flex" ,px:2,minHeight:'80vh'}}>
        <Box sx={{ flex: 2, p: 10, textAlign: "center", m: "auto" }}>
          <Typography variant="h2">Create Your Portfolio Now!!</Typography>
          <Typography variant="h4" sx={{ my: 2,mb:4 }}>
            Recruiters{" "}
            <u>
              <em>LOVE</em>
            </u>{" "}
            Portfolios more than a <s> static text </s> resume.
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "30%", fontSize: "1.5rem" }}
            href="/choose-template"
          >
            Create Now
          </Button>
        </Box>
        <Box sx={{ flex: 1, border: "1px solid red" ,display:'none'}}>hello</Box>
      </Box>
    </>
  );
}

export default Home;

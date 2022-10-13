import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 2, p: 10,  textAlign: "center",m:'auto' }}>
          <Typography variant="h2">Create Your Portfolio Now!!</Typography>
          <Typography variant="h4" sx={{ my : 2 }}>
            Recruiters <u><em>LOVE</em></u> Portfolios more than a <s> static text </s> resume.
          </Typography>
          <Button variant="contained" sx={{width:'50%', fontSize:'1.5rem'}} href="/register">Create Now</Button>
        </Box>
        <Box sx={{ flex: 1, border: "1px solid red" }}>hello</Box>
      </Box>

    </>
  );
}

export default Home;

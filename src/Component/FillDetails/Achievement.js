import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Stats from "./Stats";

function Achievement() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Achievement</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider>
                <Typography variant="body2">Section 6</Typography>
              </Divider>
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Stats value={0} />
      </Grid>
    </Container>
  );
}

export default Achievement;

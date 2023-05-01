import { Box, Button, Container, Typography } from "@mui/material";
import image from "./home3.png";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory()
  return (
    <>
      <Box
        sx={{ display: "flex", px: 2, minHeight: "80vh", maxHeight: "90vh" }}
      >
        <Box>
          <img src={image} style={{ width: "100%", heigh: "100%" }} />
        </Box>

        <Box sx={{ flex: 2, p: 10, textAlign: "center", m: "auto" }}>
          <Typography variant="h3">Create Your Portfolio Now!!</Typography>
          <Typography variant="h6" sx={{ my: 2, mb: 4 }}>
            Recruiters{" "}
            <u>
              <em>LOVE</em>
            </u>{" "}
            Portfolios more than a <s> static text </s> resume.
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: "1rem",
              backgroundColor: "#68338d !important",
              color: "white",
              "&:hover": {
                color: "black",
                backgroundColor: "#B57EDC !important",
              },
            }}
            onClick={() => {
              history.push("/register");
            }}
          >
            Get started for free
          </Button>
        </Box>
      </Box>
      {/* <Box sx={{ flex: 1, border: "1px solid red" }}>hello</Box> */}
    </>
  );
}

export default Home;

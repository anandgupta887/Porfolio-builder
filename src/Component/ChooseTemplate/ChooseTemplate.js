import { Box, Typography, Container } from "@mui/material";
import TemplateCard from "./TemplateCard";
import { Link } from "react-router-dom";
import templateList from "./TemplateList";

// console.log(details);

function ChooseTemplate() {
  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ margin: "2rem 0 3rem" }}>
        Choose Your Template
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridAutoRows: "minmax(250px, auto)",
          gap: "2rem",
          paddingTop: "16px",
        }}
      >
        {templateList?.map((data, i) => (
          <Link to="/personal-details">
            <TemplateCard key={i} data={data} />
          </Link>
        ))}
      </Box>
    </Container>
  );
}

export default ChooseTemplate;

import { Box, Typography, Container } from "@mui/material";
import TemplateCard from "./TemplateCard";
import { Link } from "react-router-dom";
import details from "../../details";
import templateList from "./TemplateList";

// console.log(details);

function ChooseTemplate() {
  console.log("bduidggsdgudysgfdusygdsuyd", templateList);
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
          <Link to="/template">
            <TemplateCard key={i} data={data} />
          </Link>
        ))}
        {console.log(details)}
        {/* {details?.map((data, i) => {
          {
            <Link to="/template">
              <TemplateCard key={i} data={data} />
            </Link>;
          }
        })} */}

        {/* {templateList?.map((data, idx) => {
          <>
            {console.log("datatat", data)}
            <h1>Hello</h1>
            <TemplateCard data={data} />;
          </>;
        })} */}
      </Box>
    </Container>
  );
}

export default ChooseTemplate;

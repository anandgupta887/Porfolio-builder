import WestIcon from "@mui/icons-material/West";
import { Box, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

function BottomButton({ prevLink, nextLink, nextText, nextSubmit }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        {prevLink && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(81, 13, 225, 0.64)",
              color: "white",
              mr: 2,
            }}
            startIcon={<WestIcon />}
            href={prevLink}
          >
            Previous
          </Button>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(81, 13, 225, 0.64)",
            color: "white",
          }}
          endIcon={<EastIcon />}
          href={nextLink}
          onClick={nextSubmit}
        >
          {nextText ? nextText : "Next"}
        </Button>
      </Box>
    </div>
  );
}

export default BottomButton;

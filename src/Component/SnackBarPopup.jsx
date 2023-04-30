import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// inside the Popup function parameter, "props" will come
// below we are destructuring the props to avoid writing "props.this/that"
function Popup({ open, set, data }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    set(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        {/* <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert> */}
        {/* Below we are using the state to render accordingly */}
        <Alert
          onClose={handleClose}
          severity={data.severity}
          sx={{ width: "100%" }}
        >
          {data.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Popup;

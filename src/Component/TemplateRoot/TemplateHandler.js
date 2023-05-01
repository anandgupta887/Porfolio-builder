import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Template from "../Template/Template";
import axios from "axios";
import { backendUrl } from "../config/config";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop, Box } from "@mui/material";
import { useHistory } from "react-router-dom";

function TemplateHandler({ browse }) {
  const [details, setDetails] = useState();

  const [loader, setLoader] = useState(true);

  let { username } = useParams();

  const history = useHistory()

  const userData = useSelector((state) => state?.user);

  const loadDetails = async () => {
    if (browse) {
      try {
        await axios.get(`${backendUrl}/profiles/${username}`).then((res) => {
          setDetails(res.data.data);
          setLoader(false);
        });
      } catch (err) {
        alert(err.response.data.error);
        setLoader(false);
      }
    } else {
      setDetails(userData);
      if (userData?.profile) {
        setLoader(false);
      } else {
        history.push("/choose-template");
      }
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <>
      {loader ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
          open={loader}
        >
          <CircularProgress />
        </Backdrop>
      ) : (
        <Template details={details} />
      )}
    </>
  );
}

export default TemplateHandler;

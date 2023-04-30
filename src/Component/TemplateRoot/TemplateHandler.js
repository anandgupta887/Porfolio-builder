import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Template from "../Template/Template";
import axios from "axios";
import { backendUrl } from "../config/config";

function TemplateHandler({ browse }) {
  const [details, setDetails] = useState();

  let { username } = useParams();

  const userData = useSelector((state) => state?.user);

  const loadDetails = async () => {
    if (browse) {
      try {
        await axios.get(`${backendUrl}profiles/${username}`).then((res) => {
          setDetails(res.data.data);
        });
      } catch (err) {
        alert(err.response.data.error);
      }
    } else {
      setDetails(userData);
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return <Template details={details} />;
}

export default TemplateHandler;

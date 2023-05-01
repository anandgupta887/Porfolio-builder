import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateTemplateId } from "../../state/actions/userAction";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../config/config";

function TemplateCard({ data }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const userData = useSelector((state) => state?.user?.profile);
  const userAuth = useSelector((state) => state?.token);

  const selectTemplate = async (data) => {
    try {
      // handleUploadImage();
      await axios
        .post(
          `${backendUrl}/template`,
          {
            templateId: parseInt(data),
          },
          {
            headers: {
              authorization: `Bearer ${userAuth}`,
            },
          }
        )
        .then((res) => {
          dispatch(updateTemplateId(res.data.resume.template));
          history.push("/personal-details");
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Card
      key={data?.id}
      sx={{ borderRadius: "30px" }}
      onClick={() => {
        selectTemplate(data.id);
      }}
    >
      <CardActionArea
        sx={{
          minHeight: 350,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <CardMedia
          sx={{ flex: 1, objectFit: "fill" }}
          component="img"
          //   height="350"
          //   width="400"
          image={
            data?.image
              ? data?.image
              : "https://cdn.dribbble.com/userupload/2795421/file/original-da3b77c9c5eec77d571a48a273cbba1a.jpg?compress=1&resize=1200x900"
          }
          alt={data?.id}
        />
        <CardContent sx={{}}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Elegant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <i>57 users already used this</i>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TemplateCard;

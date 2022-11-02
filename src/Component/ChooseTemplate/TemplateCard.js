import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function TemplateCard() {
  return (
    <Card sx={{borderRadius:"30px"}}>
      <CardActionArea sx={{height:450}}>
        <CardMedia
          component="img"
        //   height="350"
        //   width="400"
          image="https://cdn.dribbble.com/userupload/2795421/file/original-da3b77c9c5eec77d571a48a273cbba1a.jpg?compress=1&resize=1200x900"
          alt="template-1"
        />
        <CardContent>
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

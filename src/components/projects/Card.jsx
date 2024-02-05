import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./card.css";
import { Description } from "@mui/icons-material";

export default function MediaCard({
  repoName,
  description,
  language,
  html_url,
  demo,
  image,
}) {
  const handleButtonClick = (url) => {
    window.open(url, "_blank"); // Opens the provided URL in a new tab
  };

  return (
    <div className="card-frame">
      <Card
        sx={{
          maxWidth: {
            xs: "100%", // 100% width on extra-small (and by default, smaller) screens
            lg: "95%", // 95% width on large screens
          },
          backgroundImage:
            "linear-gradient(to top, rgb(33, 33, 33), rgb(10, 0, 48))",
        }}
      >
        <CardMedia
          sx={{
            height: {
              xs: 180,
              lg: 240,
            },
          }}
          image={image}
        />
        <CardContent>
          <div className="language">{language}</div>
          <Typography gutterBottom variant="h6" component="div" color="#ffffff">
            {repoName}
          </Typography>
          <Typography variant="body2" color="#ffffff">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleButtonClick(html_url)}>
            GITHUB
          </Button>
          {demo && (
            <Button size="small" onClick={() => handleButtonClick(demo)}>
              DEMO
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

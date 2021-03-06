import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },
});

function Blog({ auth, img, title, des, id, setHome, setId }) {
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        onClick={() => {
          setHome(false);
          setId(id);
        }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {des}
            </Typography>
            <br></br>
            <Typography variant="body2" color="textSecondary" component="p">
              By - {auth}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Blog;

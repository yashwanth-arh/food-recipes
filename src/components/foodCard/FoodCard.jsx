import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./FoodCard.scss";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FoodCard(props) {
  // console.log(props.data);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    if (props.data.label === props.data.label) {
      setExpanded(!expanded);
    }
  };

  return (
    <Card sx={{ maxWidth: 348, width: 348 }} className="card-food">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img
              src={props.data.image}
              alt={props.data.label}
              width="50"
              height="50"
            />
          </Avatar>
        }
        sx={{ height: 100 }}
        title={props.data.label}
        subheader={`Cuisine Type: ${props.data.cuisineType}`}
      />
      <CardMedia
        component="img"
        height="auto"
        image={props.data.image}
        alt={props.data.label}
      />
      {/* <CardContent className="card-content"> */}
      {/* {props.data.ingredients.map((e, i) => {
          return (
            <Typography variant="body2" color="text.secondary">
              {e.text}....
            </Typography>
          );
        })} */}
      {/* </CardContent> */}
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography fontSize={18} fontWeight={700} marginBottom={5}>
            Ingredient and Method:
          </Typography>
          {props.data.ingredientLines.map((e, i) => {
            return (
              <Typography key={i} paragraph>
                {e}
              </Typography>
            );
            // console.log(e);
          })}
          {/* <Typography paragraph>{props.data.ingredientLines[0]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[1]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[2]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[3]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[4]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[5]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[6]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[7]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[8]}</Typography>
          <Typography paragraph>{props.data.ingredientLines[9]}</Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

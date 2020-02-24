import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    maxWidth: 345,
    backgroundColor: "#5AC18E",
    textAlign: "left"
    // backgroundColor: "#c2c4ff"
  },
  media: {
    height: 0,
    width: 95,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const EnemyCard = ({ enemy }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={enemy.name} subheader={enemy.location} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          className={classes.media}
          image={require("../images/Alcoon.gif")}
          title={enemy.name}
        />
      </div>

      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Name: {enemy.name} <br />
            Damage: {enemy.damage} <br />
            Health: {enemy.health} <br />
            Nothing: {enemy.nothing} <br />
            Small Energy: {enemy.small_energy} <br />
            Big Energy: {enemy.big_energy} <br />
            Missile: {enemy.missile} <br />
            Super: {enemy.super} <br />
            Power Bomb: {enemy.power_bomb} <br />
            {enemy.notes ? "Notes: " + enemy.notes : null}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default EnemyCard;

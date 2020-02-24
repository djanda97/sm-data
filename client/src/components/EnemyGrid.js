import React from "react";
import EnemyCard from "./EnemyCard";
import Grid from "@material-ui/core/Grid";

const EnemyGrid = ({ enemies }) => {
  const enemyCards = enemies.map(enemy => (
    <Grid key={enemy.id} item>
      <EnemyCard enemy={enemy} />
    </Grid>
  ));

  return (
    <div style={{ padding: 20 }}>
      <Grid container justify="center" spacing={3}>
        {enemyCards}
      </Grid>
    </div>
  );
};

export default EnemyGrid;

import React, { useState, useEffect } from "react";
import EnemyCard from "./EnemyCard";
import EnemiesForm from "./EnemiesForm";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const Enemies = () => {
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/enemies").then(response => {
      console.log("Enemies retrieved.");
      setEnemies(response.data);
    });
  }, []);

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

export default Enemies;

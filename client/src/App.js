import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import EnemyCard from "./components/EnemyCard";
import EnemyGrid from "./components/EnemGrid";
import EnemyForm from "./components/EnemyForm";
import Grid from "@material-ui/core/Grid";
import SelectMenu from "./components/SelectMenu";
import { healthValues, percentages, locations } from "./global";

const App = () => {
  const styles = {
    textAlign: "center",
    backgroundColor: "#4F5B66",
    padding: 20
  };

  const [enemies, setEnemies] = useState([]);
  const [enemyCards, setEnemyCards] = useState([]);

  const [state, setState] = useState({
    health: "",
    nothing: 0,
    smallEnergy: 0,
    bigEnergy: 0,
    missile: 0,
    superMissile: 0,
    powerBomb: 0,
    location: ""
  });

  const handleChange = field => event => {
    setState({
      ...state,
      [field]: event.target.value
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3002/api/enemies").then(response => {
      console.log("Enemies retrieved.");
      setEnemies(response.data);
      // setEnemyCards(<EnemyGrid enemies={response.data} />);
      setEnemyCards(
        response.data.map(enemy => (
          <Grid key={enemy.id} item>
            <EnemyCard enemy={enemy} />
          </Grid>
        ))
      );
    });
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setEnemyCards(
      enemies
        .filter(
          enemy => enemy.health >= state.health //&&
          // enemy.nothing >= state.nothing &&
          // enemy.smallEnergy >= state.smallEnergy &&
          // enemy.bigEnergy >= state.bigEnergy &&
          // enemy.missile >= state.missile &&
          // enemy.superMissile >= state.superMissile &&
          // enemy.powerBomb >= state.powerBomb
        )
        .map(enemy => (
          <Grid key={enemy.id} item>
            <EnemyCard enemy={enemy} />
          </Grid>
        ))
    );
  };

  return (
    <div style={styles}>
      <form onSubmit={onSubmit}>
        {/* <EnemyForm state={state} /> */}
        <SelectMenu
          title="Health"
          selectValue={state.health}
          onChange={handleChange("health")}
          menuValues={healthValues}
        />

        <SelectMenu
          title="Nothing"
          selectValue={state.nothing}
          onChange={handleChange("nothing")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Small Energy"
          selectValue={state.smallEnergy}
          onChange={handleChange("smallEnergy")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Big Energy"
          selectValue={state.bigEnergy}
          onChange={handleChange("bigEnergy")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Missile"
          selectValue={state.missile}
          onChange={handleChange("missile")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Super"
          selectValue={state.superMissile}
          onChange={handleChange("superMissile")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Power Bomb"
          selectValue={state.powerBomb}
          onChange={handleChange("powerBomb")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Location"
          selectValue={state.location}
          onChange={handleChange("location")}
          menuValues={locations}
        />

        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      <br />

      <Grid container justify="center" spacing={3}>
        {enemyCards}
      </Grid>
    </div>
  );
};

export default App;

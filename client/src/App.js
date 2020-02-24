import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Text from "./components/Text";
import EnemyForm from "./components/EnemyForm";
import EnemyGrid from "./components/EnemyGrid";

const App = () => {
  const styles = {
    textAlign: "center",
    backgroundColor: "#4F5B66",
    padding: 20
  };

  const [fields, setFields] = useState({
    health: "",
    nothing: "",
    smallEnergy: "",
    bigEnergy: "",
    missile: "",
    superMissile: "",
    powerBomb: "",
    location: ""
  });

  const handleChange = field => event => {
    setFields({
      ...fields,
      [field]: event.target.value
    });
  };

  const [initialEnemies, setInitialEnemies] = useState([]);
  const [enemies, setEnemies] = useState([]);

  const fetchEnemies = () => {
    axios.get("http://localhost:3002/api/enemies").then(response => {
      console.log("Enemies retrieved.");
      setInitialEnemies(response.data);
      setEnemies(response.data);
    });
  };

  useEffect(fetchEnemies, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Submitted.");
    const filteredEnemies = enemies.filter(
      enemy => enemy.health >= fields.health
    );
    console.log(filteredEnemies);
    setEnemies(filteredEnemies);
  };

  const handleReset = () => {
    console.log("Enemies reset.");
    setEnemies(initialEnemies);
  };

  return (
    <Fragment>
      <div style={styles}>
        <Text
          styles={{ textAlign: "center", fontSize: 32, color: "indigo" }}
          text="Super Metroid: Enemy Data Search"
        />
        <Text
          styles={{ textAlign: "center", fontSize: 20, color: "orange" }}
          text="Each field value in the drop down menus indicates the minimum value. For example, selecting 500 in the health drop down means that you want to search for enemies that have at least 500 health. Fields containing values ranging from 0-100 indicate minimum percentages."
        />
        <EnemyForm
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
        <EnemyGrid enemies={enemies} />
      </div>
    </Fragment>
  );
};

export default App;

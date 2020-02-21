import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const SelectMenu = ({ title, selectValue, onChange, menuValues }) => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectValue}
        onChange={onChange}
      >
        {menuValues.map(value => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const healthValues = [100, 200, 500, 750, 1000, 1250, 1500, 1750, 2000];
const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const locations = [
  "Crateria",
  "Brinstar",
  "Norfair",
  "Wrecked Ship",
  "Tourian"
];

export default function EnemiesForm() {
  const [name, setName] = React.useState("");
  const [health, setHealth] = React.useState("");
  const [nothing, setNothing] = React.useState("");
  const [smallEnergy, setSmallEnergy] = React.useState("");
  const [bigEnergy, setBigEnergy] = React.useState("");
  const [missile, setMissile] = React.useState("");
  const [superMissile, setSuperMissile] = React.useState("");
  const [powerBomb, setPowerBomb] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleHealthChange = event => {
    setHealth(event.target.value);
  };

  const handleNothingChange = event => {
    setNothing(event.target.value);
  };

  const handleSmallEnergyChange = event => {
    setSmallEnergy(event.target.value);
  };

  const handleBigEnergyChange = event => {
    setBigEnergy(event.target.value);
  };

  const handleMissileChange = event => {
    setMissile(event.target.value);
  };

  const handleSuperMissileChange = event => {
    setSuperMissile(event.target.value);
  };

  const handlePowerBombChange = event => {
    setPowerBomb(event.target.value);
  };

  const handleLocationChange = event => {
    setLocation(event.target.value);
  };

  const onSubmit = () => {
    const url = "http://localhost:3002/api/enemies/" + health;
    console.log(`url: ${url}`);
    axios
      .post(url, {
        health: health
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form
        action={"http://localhost:3002/api/enemies/" + health}
        method="POST"
      >
        {/* <form onSubmit={onSubmit}> */}
        <SelectMenu
          title="Health"
          selectValue={health}
          onChange={handleHealthChange}
          menuValues={healthValues}
        />

        <SelectMenu
          title="Nothing"
          selectValue={nothing}
          onChange={handleNothingChange}
          menuValues={percentages}
        />

        <SelectMenu
          title="Small Energy"
          selectValue={smallEnergy}
          onChange={handleSmallEnergyChange}
          menuValues={percentages}
        />

        <SelectMenu
          title="Big Energy"
          selectValue={bigEnergy}
          onChange={handleBigEnergyChange}
          menuValues={percentages}
        />

        <SelectMenu
          title="Missile"
          selectValue={missile}
          onChange={handleMissileChange}
          menuValues={percentages}
        />

        <SelectMenu
          title="Super"
          selectValue={superMissile}
          onChange={handleSuperMissileChange}
          menuValues={percentages}
        />

        <SelectMenu
          title="Power Bomb"
          selectValue={powerBomb}
          onChange={handlePowerBombChange}
          menuValues={percentages}
        />

        <SelectMenu
          title="Location"
          selectValue={location}
          onChange={handleLocationChange}
          menuValues={locations}
        />

        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

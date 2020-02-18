import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function EnemiesForm() {
  const classes = useStyles();
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
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Health</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={health}
            onChange={handleHealthChange}
          >
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={750}>750</MenuItem>
            <MenuItem value={1000}>1000</MenuItem>
            <MenuItem value={1250}>1250</MenuItem>
            <MenuItem value={1500}>1500</MenuItem>
            <MenuItem value={1750}>1750</MenuItem>
            <MenuItem value={2000}>2000</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Nothing</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nothing}
            onChange={handleNothingChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Small Energy</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={smallEnergy}
            onChange={handleSmallEnergyChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Big Energy</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bigEnergy}
            onChange={handleBigEnergyChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Missile</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={missile}
            onChange={handleMissileChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Super</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={superMissile}
            onChange={handleSuperMissileChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Power Bomb</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={powerBomb}
            onChange={handlePowerBombChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            onChange={handleLocationChange}
          >
            <MenuItem value={"Crateria"}>Crateria</MenuItem>
            <MenuItem value={"Brinstar"}>Brinstar</MenuItem>
            <MenuItem value={"Norfair"}>Norfair</MenuItem>
            <MenuItem value={"Wrecked Ship"}>Wrecked Ship</MenuItem>
            <MenuItem value={"Tourian"}>Tourian</MenuItem>
          </Select>
        </FormControl>

        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

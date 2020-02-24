import React from "react";
import Button from "@material-ui/core/Button";
import SelectMenu from "./SelectMenu";
import { healthValues, percentages, locations } from "../global";

const EnemyForm = ({ fields, handleChange, handleSubmit, handleReset }) => {
  const divStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  const buttonStyles = {
    margin: 10,
    width: 50
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectMenu
          title="Health"
          selectValue={fields.health}
          onChange={handleChange("health")}
          menuValues={healthValues}
        />

        <SelectMenu
          title="Nothing"
          selectValue={fields.nothing}
          onChange={handleChange("nothing")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Small Energy"
          selectValue={fields.smallEnergy}
          onChange={handleChange("smallEnergy")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Big Energy"
          selectValue={fields.bigEnergy}
          onChange={handleChange("bigEnergy")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Missile"
          selectValue={fields.missile}
          onChange={handleChange("missile")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Super"
          selectValue={fields.superMissile}
          onChange={handleChange("superMissile")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Power Bomb"
          selectValue={fields.powerBomb}
          onChange={handleChange("powerBomb")}
          menuValues={percentages}
        />

        <SelectMenu
          title="Location"
          selectValue={fields.location}
          onChange={handleChange("location")}
          menuValues={locations}
        />

        <br />

        <div style={divStyles}>
          <Button variant="contained" type="submit" style={buttonStyles}>
            Search
          </Button>

          <Button
            variant="contained"
            style={buttonStyles}
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EnemyForm;

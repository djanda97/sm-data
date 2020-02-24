// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import SelectMenu from "./SelectMenu";
// import { healthValues, percentages, locations } from "../global";

// const EnemyForm = () => {
//   const [state, setState] = useState({
//     name: "",
//     health: "",
//     nothing: "",
//     smallEnergy: "",
//     bigEnergy: "",
//     missile: "",
//     superMissile: "",
//     powerBomb: "",
//     location: ""
//   });

//   const handleChange = field => event => {
//     setState({
//       ...state,
//       [field]: event.target.value
//     });
//   };

//   return (
//     <div>
//       <form>
//         {/* <form onSubmit={onSubmit}> */}
//         <SelectMenu
//           title="Health"
//           selectValue={state.health}
//           onChange={handleChange("health")}
//           menuValues={healthValues}
//         />

//         <SelectMenu
//           title="Nothing"
//           selectValue={state.nothing}
//           onChange={handleChange("nothing")}
//           menuValues={percentages}
//         />

//         <SelectMenu
//           title="Small Energy"
//           selectValue={state.smallEnergy}
//           onChange={handleChange("smallEnergy")}
//           menuValues={percentages}
//         />

//         <SelectMenu
//           title="Big Energy"
//           selectValue={state.bigEnergy}
//           onChange={handleChange("bigEnergy")}
//           menuValues={percentages}
//         />

//         <SelectMenu
//           title="Missile"
//           selectValue={state.missile}
//           onChange={handleChange("missile")}
//           menuValues={percentages}
//         />

//         <SelectMenu
//           title="Super"
//           selectValue={state.superMissile}
//           onChange={handleChange("superMissile")}
//           menuValues={percentages}
//         />

//         <SelectMenu
//           title="Power Bomb"
//           selectValue={state.powerBomb}
//           onChange={handleChange("powerBomb")}
//           menuValues={percentages}
//         />

//         <SelectMenu
//           title="Location"
//           selectValue={state.location}
//           onChange={handleChange("location")}
//           menuValues={locations}
//         />

//         <br />

//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default EnemyForm;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SelectMenu from "./SelectMenu";
import { healthValues, percentages, locations } from "../global";

const EnemyForm = () => {
  const [state, setState] = useState({});

  const handleChange = field => event => {
    setState({
      ...state,
      [field]: event.target.value
    });
  };

  return (
    <div>
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
    </div>
  );
};

export default EnemyForm;

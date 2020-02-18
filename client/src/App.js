import React from "react";
// import "./App.css";
import Enemies from "./components/Enemies";
import EnemiesForm from "./components/EnemiesForm";

const App = () => {
  // const headerStyle = {
  //   height: 100,
  //   backgroundColor: "orange",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center"
  // };

  const appStlye = {
    textAlign: "center",
    backgroundColor: "gray"
  };

  return (
    <div style={appStlye}>
      <EnemiesForm />
      <Enemies />
    </div>
  );
};

export default App;

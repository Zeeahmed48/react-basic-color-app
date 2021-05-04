import React, { useState } from "react";
import "./App.css";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  teal,
  green,
} from "@material-ui/core/colors";
import Colors from "./colors";

const App = () => {
  const [colors, setColors] = useState([
    red[500],
    red[200],
    red[200],
    pink[500],
    pink[200],
    pink[900],
    purple[500],
    purple[200],
    purple[900],
    deepPurple[500],
    deepPurple[200],
    deepPurple[900],
    indigo[500],
    indigo[200],
    indigo[900],
    blue[500],
    blue[200],
    blue[900],
    teal[500],
    teal[200],
    teal[900],
    green[500],
    green[200],
    green[900],
  ]);
  return (
    <div className="App">
      <Colors colorNames={colors} />
    </div>
  );
};

export default App;

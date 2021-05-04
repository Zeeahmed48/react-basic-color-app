import React from "react";

const Colors = ({colorNames}) => {
  return (
    <div className="row">
      {colorNames.map((color, index) => (
        <div className="col" key={index} style={{ backgroundColor: color }}>
          {color}
        </div>
      ))}
    </div>
  );
};

export default Colors;

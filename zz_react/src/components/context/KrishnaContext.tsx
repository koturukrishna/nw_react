import React from "react";
import { BioDataContext } from "./BioDataContext";

const KrishnaContext = () => {
  const bioData = React.useContext(BioDataContext);
  console.log("BioData from context:", bioData);
  return (
    <div>
      <h4>using useContext here</h4>
      <p>Name: {bioData.name}</p>
      <p>Place: {bioData.place}</p>
      <p>Role:{bioData.role}</p>
    </div>
  );
};

export default KrishnaContext;

import './App.css';

import React, { useState, useCallback } from "react";

const App = () => {

  const [rainbowSightings, setRainbowSightings] = useState(0);
  const [happyExperiences, setHappyExperiences] = useState(5000);

  const rainbowSightingsIncrementor = useCallback(() => setRainbowSightings(rainbowSightings => rainbowSightings + 1), []);
  const updateNumberOfHappyExperiences = useCallback(() => setHappyExperiences(happyExperiences => happyExperiences + rainbowSightings), [rainbowSightings]);

  return (
    <>
      <div> Current Rainbows Sighted: {rainbowSightings} </div>
      <div> Number of Happy Experiences: {happyExperiences} </div>
      <div>
      <button onClick={rainbowSightingsIncrementor}> Add 1 Rainbow Sighting </button>
      <button onClick={updateNumberOfHappyExperiences}> Update Number of Happy Experiences </button>
      <button onClick={() => setRainbowSightings(0)}> Reset Rainbow Sightings </button>
      </div>
    </>
  );
}

export default App;

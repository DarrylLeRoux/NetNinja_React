import React from "react";

const TripList = () => {
  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
};

export default TripList;

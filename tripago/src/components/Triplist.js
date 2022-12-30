import React from "react";
import { useState, useEffect } from "react";

// styles
import "./Triplist.css";

const Triplist = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);

  return (
    <div className="trip-list">
      <h2>Triplist</h2>
      <ul>
        {trips.map((trip) => {
          return (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Triplist;

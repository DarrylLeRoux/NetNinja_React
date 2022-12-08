import { useState, useRef } from "react";
import "./NewEventForm.css";

import React from "react";

// Pass in the addEvent prop from the App component
function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  // USEREF
  // const title = useRef();
  // const date = useRef();

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("Manchester");
    //USEREF
    // title.current.value = "";
    // date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };

    console.log(event);
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input
          type="text"
          useref={title}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          useref={date}
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label>
          <span>Event Location:</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
          </select>
        </label>
      </label>
      <button type="submit">Submit</button>
      <p onClick={resetForm}>Rest the Form</p>
    </form>
  );
}

export default NewEventForm;

import { useState, useRef } from "react";
import "./NewEventForm.css";

import React from "react";

// Pass in the addEvent prop from the App component
function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // USEREF
  // const title = useRef();
  // const date = useRef();

  const resetForm = () => {
    setTitle("");
    setDate("");
    //USEREF
    // title.current.value = "";
    // date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };

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
      </label>
      <button type="submit">Submit</button>

      <p onClick={resetForm}>Rest the Form</p>
    </form>
  );
}

export default NewEventForm;

import { useState } from "react";
import "./NewEventForm.css";

import React from "react";

function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button type="submit">Submit</button>
      <p>tite - {title}</p>
      <p>date - {date}</p>
      <p onClick={resetForm}>Rest the Form</p>
    </form>
  );
}

export default NewEventForm;

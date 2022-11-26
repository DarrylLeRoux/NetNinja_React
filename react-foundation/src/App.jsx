import { useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([
    { title: "Marios birthday bash", id: 1 },
    { title: "Bowsers lives stream", id: 2 },
    { title: "Race on Moo Moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents(
      // If the id matches the event.id, then remove it from the array
      // Return the new array where the id does not match the event.id (Ones that are not clicked)
      events.filter((event) => {
        return id !== event.id;
      })
    );
    console.log(id);
  };

  return (
    <div className="App">
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              Delete Event
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

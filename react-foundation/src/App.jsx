import { useState } from "react";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Marios birthday bash", id: 1 },
    { title: "Bowsers lives stream", id: 2 },
    { title: "Race on Moo Moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    // If you need to use the previous state, always use the prev state inside a callback function.
    setEvents((prevEvents) => {
      // If the id matches the event.id, then remove it from the array
      // Return the new array where the id does not match the event.id (Ones that are not clicked)
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="App">
      <Title />
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            Hide Events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            Show Events
          </button>
        </div>
      )}
      {/* use showEvents as set as true, and if not, then run the code at the right of the && */}
      {showEvents &&
        events.map((event) => {
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

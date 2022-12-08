import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import "./App.css";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([]);

  // Take the event function from NewEventForm and add it to the prevEvents state (which is an empty array as per line 12)
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

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

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
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
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;

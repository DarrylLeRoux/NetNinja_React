import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(false);
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
  const handleClose = () => {
    setShowModal(false);
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
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at checkout</p>
      </Modal> */}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima
            aut qui eius dignissimos! Corrupti quisquam numquam maxime dolore
            molestiae.
          </p>
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;

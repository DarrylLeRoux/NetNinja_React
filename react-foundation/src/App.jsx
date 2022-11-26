import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Mario");
  const [events, setEvents] = useState([
    { title: "Marios birthday bash", id: 1 },
    { title: "Bowsers lives stream", id: 2 },
    { title: "Race on Moo Moo farm", id: 3 },
  ]);

  const handleClick = () => {
    setName("Darryl");
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;

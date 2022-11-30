import React from "react";

const EventList = ({ events, handleClick }) => {
  return (
    <div>
      {events.map((event) => {
        return (
          <React.Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              Delete Event
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default EventList;

import eventsData from "./upcoming-events.json";
import Event from "./Event";

export default function PageBoard({ events = eventsData }) {
  return (
    <div>
      <h1>Page board</h1>
      <ul>
        {events.map((event, index) => (
          <Event
            key={index}
            name={event.name}
            start={event.time.start}
            end={event.time.end}
            location={event.location}
            speaker={event.speaker}
          />
        ))}
      </ul>
    </div>
  );
}

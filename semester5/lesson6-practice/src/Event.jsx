export default function Event({ name, start, end, location, speaker, icon }) {
  return (
    <div className="event-card">
      <div className="icon">{icon}</div>
      <h2>{name}</h2>
      <p>
        <strong>Start:</strong> {start}
      </p>
      <p>
        <strong>End:</strong> {end}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Speaker:</strong> {speaker}
      </p>
    </div>
  );
}

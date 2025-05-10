import './css/greetings.css'
export default function Greetings(props) {
  return (
    <div className="container-greetings">
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

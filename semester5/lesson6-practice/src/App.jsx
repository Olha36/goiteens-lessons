import "./App.css";
import PageBoard from './PageBoard'
import events from './upcoming-events.json';

function App() {
  return <>
  <PageBoard events={events} />
  </>;
}

export default App;

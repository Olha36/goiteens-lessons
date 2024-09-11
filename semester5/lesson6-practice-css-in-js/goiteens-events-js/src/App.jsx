import './App.css';
import { PropTypes } from 'prop-types';
import eventsData from '../src/upcoming-events.json';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0; 
  }
    .title-wrapper {
    display: flex;
    align-items: center;

  h1, h2, h3, h4, h5, h6 {
    color: #333; 
  }

  p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #666;
  }
  svg {
    margin-right: 15px
  }
`;

const PageBoard = ({ name, location, speaker, type, start, end, Icon }) => {
  return (
    <div>
      <div className='title-wrapper'>
        {Icon && <Icon />}
        <h2>{name}</h2>
      </div>
      <p>{location}</p>
      <p>{speaker}</p>
      <p>{type}</p>
      <p>{start}</p>
      <p>{end}</p>
    </div>
  );
};

PageBoard.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  speaker: PropTypes.string,
  type: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  Icon: PropTypes.elementType,
};

function App() {
  return (
    <>
      <GlobalStyle />
      {eventsData.map((events, index) => (
        <PageBoard
          key={index}
          name={events.name}
          location={events.location}
          speaker={events.speaker}
          type={events.type}
          start={events.time.start}
          end={events.time.end}
          Icon={BsFillCalendarEventFill}
        />
      ))}
    </>
  );
}

export default App;

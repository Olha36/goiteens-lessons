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
    #root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    }
    .card-container {
    width: 350px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    margin-bottom: 30px;
    }
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

  h2 {
    color: #333; 
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
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
  const getColorByType = (type) => {
    switch (type) {
      case 'free':
        return 'green';
      case 'paid':
        return 'blue';
      case 'vip':
        return 'red';
      default:
        return 'black';
    }
  };
  return (
    <div className='card-container'>
      <div className='title-wrapper'>
        {Icon && <Icon />}
        <h2>{name}</h2>
      </div>
      <p>{location}</p>
      <p>{speaker}</p>
      <p style={{ color: getColorByType(type) }}>{type}</p>
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

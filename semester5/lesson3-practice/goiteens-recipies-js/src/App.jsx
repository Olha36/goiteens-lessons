import { FaClock, FaUserFriends, FaFireAlt, FaChartLine } from 'react-icons/fa';
import Recipe from './Recipe';
import recipesData from './recipies.json'; // or fetch if in public folder

function App() {
  const icons = {
    time: <FaClock />,
    servings: <FaUserFriends />,
    calories: <FaFireAlt />,
    difficultxy: <FaChartLine />,
  };

  return (
    <div>
      {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} icons={icons} />
      ))}
    </div>
  );
}

export default App;

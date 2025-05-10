import "./App.css";
import FriendList from "./FriendList";
import friends from './friends.json';

function App() {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
}

export default App;

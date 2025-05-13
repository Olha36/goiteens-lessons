import "./css/friends.css";

export default function FriendList({ friends }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <li className="card" key={friend.id}>
            <img src={friend.avatar} alt={friend.name} />
            <p className="font-size"> {friend.name}</p>
            <p
              className={`order styles ${
                friend.isOnline ? "online" : "offline"
              }`}
            ></p>
          </li>
        ))}
      </ul>
    </>
  );
}

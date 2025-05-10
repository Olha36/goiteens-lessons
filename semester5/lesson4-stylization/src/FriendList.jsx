

export default function FriendList({ friends }) {
  return (
    <>
      <h1>friend list</h1>
      <ul className="friend-list">
        {friends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.avatar} alt={friend.name} />
            <p>{friend.name}</p>
            <p>{friend.isOnline ? "true" : "false"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

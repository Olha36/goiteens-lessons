function User() {
    const {name, age, city, occupation} = {name: "John", age: 30, city: "New York", occupation: "Developer"};
  return (
    <div>
      <h1>User</h1>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{city}</p>
      <p>{occupation}</p>
    </div>
  );
}

export default User;

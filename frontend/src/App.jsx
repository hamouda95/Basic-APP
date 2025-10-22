import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard.jsx";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>👋 Liste des utilisateurs</h1>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </div>
  );
}
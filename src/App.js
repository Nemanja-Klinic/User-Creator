import './App.css';
import React, { useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (newUsername,newAge,id) => {
      setUsersList((oldList) => {
        return [...oldList, {name: newUsername, age: newAge, id: id}];
      })
  }
  return (
      <div>
          <AddUser onAddUser={addUserHandler}/>
          <UserList users={usersList}  />
      </div>
  );
}

export default App;

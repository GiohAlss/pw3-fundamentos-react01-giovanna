import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users.js';
import CreateUser from './components/createUser';

function App() {

  return (
    <div className="App">
      {/* <Users/> */}
      <CreateUser/>
    </div>
  );
}

export default App;

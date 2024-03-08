import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users.js';
import CreateUser from './components/createUser';

function App() {

  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
  },[]);

  return (
    <div className="App">
      <CreateUser/>
    </div>
  );
}

export default App;

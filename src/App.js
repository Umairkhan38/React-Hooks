import React from 'react';
import UseStObj from './Components/UseStObj';
import {Routes,Route} from 'react-router-dom';
import Todo from './Components/Todo/Todo';
import Login from './Components/Login Form/Login';
import Users from './Components/UsersAPI/Users';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'  element={<UseStObj />} />
      <Route path='/Todo'  element={<Todo />} />
      <Route path='/Login'  element={<Login />} />
      <Route path='/Users'  element={<Users />} />


      </Routes>
    </div>
  );
}

export default App;

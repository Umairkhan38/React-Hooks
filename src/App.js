import React from 'react';
import UseStObj from './Components/UseStObj';
import {Routes,Route} from 'react-router-dom';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'  element={<UseStObj />} />
      <Route path='/Todo'  element={<Todo />} />


      </Routes>
    </div>
  );
}

export default App;

import {Route,Routes} from 'react-router-dom';
import './App.css';
import React  from 'react';
import Parent from './Components/Parent';
import Child from './Components/Child';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/Child" element={<Child />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

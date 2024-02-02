import {Route,Routes} from 'react-router-dom';
import './CSS/UseState.css';
import React  from 'react';
import  UseState  from './Components/UseState';
// import Parent from './Components/Parent';
// import Child from './Components/Child';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        {/* <Route path="/" element={<Parent />} />
        <Route path="/Child" element={<Child />} /> */}
        <Route path='/' element={<UseState />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

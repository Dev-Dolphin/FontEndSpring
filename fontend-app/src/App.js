import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { apiRequest } from './common/http';
import Employee from './features/employee/Employee';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Employee />
         
      </header>
    </div>
  );
}

export default App;

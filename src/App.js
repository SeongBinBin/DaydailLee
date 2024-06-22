import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/DaydailLee" element={<Header />} />
          <Route path='/register' element={<Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

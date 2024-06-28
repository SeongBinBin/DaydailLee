import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Register from './Pages/Register/Register';
import MainPage from './Pages/MainPage/MainPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/DaydailLee" element={<MainPage />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

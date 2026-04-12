import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hospital from './Hospital/Hospital';
import HospitalList from './HospitalList/HospitalList';

function App() {
  return (
    <div>
      <HospitalList/>
    </div>
  );
}

export default App;

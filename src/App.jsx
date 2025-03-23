import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MultiStepForm from './components/MultiStepForm';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/auth/register" element={<MultiStepForm />} />
         <Route path="/auth/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;

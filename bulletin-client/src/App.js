import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnnouncementForm from './components/AnnouncementForm';
import AnnouncementList from './components/AnnouncementList';
import Login from './components/Login';
import Register from './components/Register';
import AddUser from './components/admin/add-user'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<AnnouncementList />} />
          <Route path="/create" element={<AnnouncementForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

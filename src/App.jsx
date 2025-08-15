import { useState } from 'react';
import { Routes, Route } from "react-router"
import Dashboard from './components/Dashboard.jsx';
import StudentList from './components/StudentList.jsx';
import AddnewStudent from './components/AddnewStudent.jsx'
import StudentProfile from './components/StudentProfile.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/profile" element={<StudentProfile />} />
        <Route path="/add-new-student" element={<AddnewStudent />} />
      </Routes>
    </>
  )
}

export default App

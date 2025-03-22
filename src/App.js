import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherDashboard from "./components/TeacherDashboard";
import SubjectFolder from "./components/SubjectFolder";
import StudentFolder from "./components/StudentFolder";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register"; 
import Login from "./components/Login";
import firebase  from "firebase/compat/app";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<TeacherDashboard />} />
        <Route path="/subject/:subjectName" element={<SubjectFolder />} />
        <Route path="/student/:subjectName/:studentName" element={<StudentFolder />} />
      </Routes>
    </Router>
  );
}

export default App;


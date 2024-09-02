import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ViewSchedules from "./components/ViewSchedules";
import ScheduleAppointment from "./components/ScheduleAppointment";

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAppointmentBooked = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/view-schedules" element={<ViewSchedules appointments={appointments} />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment onAppointmentBooked={handleAppointmentBooked} />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScheduleAppointment.css";

const ScheduleAppointment = ({ onAppointmentBooked }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { date, time };

    // Update the parent component's state
    onAppointmentBooked(newAppointment);

    // Show confirmation message
    setShowConfirmation(true);

    // Redirect after a delay to ensure user sees the message
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="schedule-container">
      <h2>Schedule an Appointment</h2>
      <p>Select a date and time for your appointment.</p>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Confirm Appointment</button>
      </form>
      {showConfirmation && <p className="confirmation-message">Your appointment has been booked!</p>}
    </div>
  );
};

export default ScheduleAppointment;

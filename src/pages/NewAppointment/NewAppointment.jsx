// npm modules
import { useState } from "react";
import * as React from "react";
import { useLocation, } from "react-router-dom";

// css
import styles from "./NewAppointment.module.css";
import DoctorAvailabilityModal from "../../components/DoctorAvailabilityModal/DoctorAvailabilityModal";

//components

const NewAppointment = (props) => {
  const location = useLocation();
  const doctor = location.state.doctor;
  const selectedDate = location.state.selectedDate;
  const selectedTime = location.state.selectedTime;
  console.log(
    "state on new appoitment page: time - ",
    location.state.selectedTime
  );
  console.log(
    "state on new appoitment page: date - ",
    location.state.selectedDate
  );

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 250,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "hidden",
  };


  const [appointmentFormData, setAppointmentFormData] = useState({
    appointmentDate: selectedDate,
    time: selectedTime,
    reason: "",
    mode: "In Person",
    doctor: doctor._id,
  });

  const handleClick = (newSelectedTime, newSelectedDate) => {
    setAppointmentFormData({
      ...appointmentFormData,
      appointmentDate: new Date(newSelectedDate).toISOString().split("T")[0],
      time: newSelectedTime,
    });
    handleClose();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddAppointment(appointmentFormData);
  };

  const handleChange = (evt) => {
    setAppointmentFormData({
      ...appointmentFormData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <main className={styles.container}>
       <DoctorAvailabilityModal
        open={open}
        handleClose={handleClose}
        doctor={doctor}
        handleClick={handleClick}
      />
      <form onSubmit={handleSubmit}>
        <h3>Create an appointment with {doctor.name}</h3>
        <label>
          Date: {new Date(appointmentFormData.appointmentDate).toDateString()}{" "}
        </label>
        <label>Time: {appointmentFormData.time}</label>
        <br />
        <span
          onClick={handleOpen}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          View More Available Slots
        </span>
        <br />
        <input
          hidden
          type="date"
          name="appointmentDate"
          value={appointmentFormData.appointmentDate}
          onChange={handleChange}
        />
        <input
          hidden
          type="time"
          name="time"
          value={appointmentFormData.time}
          onChange={handleChange}
        />
        <label>Appointment Type</label>
        <select
          name="mode"
          value={appointmentFormData.mode}
          onChange={handleChange}
        >
          <option value="In Person">In Person</option>
          <option value="Phone Call">Phone Call</option>
        </select>
        <label>Reason for Visit</label>
        <textarea
          required
          type="text"
          name="reason"
          value={appointmentFormData.reason}
          onChange={handleChange}
        />
        <button type="submit">CREATE APPOINTMENT</button>
      </form>
    </main>
  );
};

export default NewAppointment;

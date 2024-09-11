// npm modules
import { useState } from "react";
import { useLocation } from "react-router-dom";

//css
import styles from "./EditAppointment.module.css";

//components
import DoctorAvailabilityModal from "../../components/DoctorAvailabilityModal/DoctorAvailabilityModal";
import DoctorInfo from "../../components/DoctorInfo/DoctorInfo";

const EditAppointment = (props) => {
  const { state } = useLocation();
  const [appointmentFormData, setAppointmentFormData] = useState(state);

  const handleChange = (evt) => {
    setAppointmentFormData({
      ...appointmentFormData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUpdateAppointment(appointmentFormData);
  }

  const handleClick = (newSelectedTime, newSelectedDate) => {
    setAppointmentFormData({
      ...appointmentFormData,
      appointmentDate: newSelectedDate,
      time: newSelectedTime,
    });
    handleClose();
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <main className={styles.container}>
      <DoctorAvailabilityModal
        open={open}
        handleClose={handleClose}
        doctor={appointmentFormData.doctor}
        handleClick={handleClick}
      />
      <form onSubmit={handleSubmit}>
        <DoctorInfo doctor={appointmentFormData.doctor} />
        <br /> <br />
        <a onClick={handleOpen}>Select New Date and Time</a>
        <br />
        <label>Date</label>
        <input
          disabled
          type="text"
          name="appointmentDateForDisplay"
          value={new Date(appointmentFormData.appointmentDate).toDateString()}
          onChange={handleChange}
        />
        <input
          hidden
          disabled
          type="text"
          name="appointmentDate"
          value={appointmentFormData.appointmentDate}
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          disabled
          type="text"
          name="time"
          value={appointmentFormData.time}
          onChange={handleChange}
        />
        <br />
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
        <button type="submit">UPDATE APPOINTMENT</button>
      </form>
    </main>
  );
};

export default EditAppointment;

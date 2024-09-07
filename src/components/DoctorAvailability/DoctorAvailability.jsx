// css import
import styles from "./DoctorAvailability.module.css";

const DoctorAvailability = ({ doctor, handleClick }) => {
  return (
    <>
      <h3>Available Appointment Slots</h3>
      {doctor.availability.map((availability, index) => (
        <div key={index}>
          <h4>{new Date(availability.date).toDateString()}</h4>
          <div>
            {availability.slots.map((slot, slotIndex) => (
              slot.isAvailable ? (
                <button
                  className={styles.button}
                  key={slotIndex}
                  onClick={() => handleClick(slot.time)}
                >
                  {slot.time}
                </button>
              ) : (
                <button
                  className={styles.button}
                  key={slotIndex}
                  style={{ backgroundColor: '#E0E0E0', cursor: 'not-allowed' }}
                  disabled
                >
                  {slot.time}
                </button>
              )
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorAvailability;

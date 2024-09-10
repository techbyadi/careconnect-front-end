import { useState, useEffect } from 'react';
// css import
import styles from "./DoctorAvailability.module.css";

// services
import * as doctorService from '../../services/doctorService'

const DoctorAvailability = ({ doctor, handleClick }) => {
  const [updatedDoctor, setUpdatedDoctor] = useState(doctor)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async() => {
      const doctorData = await doctorService.show(doctor._id)
      setUpdatedDoctor(doctorData)
      setLoading(false)
    }
    fetchDoctor()    
  }, [doctor])

  
  return (
    <>
      <h3>Available Appointment Slots</h3>

      {loading ? <h4> ⌛ Loading availability...</h4> :
      (updatedDoctor.availability.map((availability, index) => (
        <div key={index}>
          <h4>{new Date(availability.date).toDateString()}</h4>
          
          <div>
            {availability.slots.map((slot, slotIndex) => (
              slot.isAvailable ? (
                <button
                  className={styles.button}
                  key={slotIndex}
                  onClick={() => handleClick(slot.time, availability.date)}
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
      )))
    }
    </>
  );
};

export default DoctorAvailability;

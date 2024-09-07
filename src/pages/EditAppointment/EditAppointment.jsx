// npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

//css
import styles from './EditAppointment.module.css'

const EditAppointment = (props) => {
  const { state } = useLocation()
  const [appointmentFormData, setappointmentFormData] = useState(state)

  const handleChange = (evt) => {
    setappointmentFormData({ ...appointmentFormData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateAppointment(appointmentFormData)
  }
  

  return (
    < main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Edit appointment</h2>
        <label>Date</label>
        <input 
        required
        type='date'
        name='appointmentDate'
        value={new Date(appointmentFormData.appointmentDate).toISOString().split('T')[0]}
        onChange={handleChange}
        />

        <label>Time</label>
        <input 
        required
        type='time'
        name='time'
        value={appointmentFormData.time}
        onChange={handleChange}
        />
        <label>Appointment Type</label>
        <select name='mode' value={appointmentFormData.mode} onChange={handleChange}> 
          <option value="In Person" >In Person</option>
          <option value="Phone Call" >Phone Call</option>          
        </select>
        <label>Reason for Visit</label>
        <textarea
          required
          type='text'
          name='reason'
          value={appointmentFormData.reason}
          onChange={handleChange}
        />
        <button type='submit'>UPDATE APPOINTMENT</button>
      </form>
    </main>
  )
}

export default EditAppointment
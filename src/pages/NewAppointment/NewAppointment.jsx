// npm modules
import { useState } from 'react'

// css
import styles from './NewAppointment.module.css'

const NewAppointment = (props) => {
  const [appointmentFormData, setAppointmentFormData] = useState({
    appointmentDate: '',
    time: '',
    reason: '',
    mode: 'In Person'
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddAppointment(appointmentFormData)
  }

  const handleChange = evt => {
    setAppointmentFormData({...appointmentFormData, [evt.target.name]: evt.target.value})
  }

  return (
    < main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Create an appointment with Dr. Austin</h2>
        <label>Date</label>
        <input 
        required
        type='date'
        name='appointmentDate'
        value={appointmentFormData.appointmentDate}
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
        <label>In-Person/Video</label>
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
        <button type='submit'>CREATE APPOINTMENT</button>
      </form>
    </main>
  )
}

export default NewAppointment
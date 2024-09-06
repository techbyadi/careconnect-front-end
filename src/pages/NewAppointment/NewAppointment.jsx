// npm modules
import { useState } from 'react'

// components
import DoctorDetails from '../DoctorDetails/DoctorDetails'

// css
import styles from './NewAppointment.module.css'

const NewAppointment = () => {
  return (
    < main className={styles.container}>
      <form>
        <h1>New Appointment</h1>
        <label>Patient</label>
        <input 
        required
        type='text'
        name='patient'
        value={''}
        />
        <label>Doctor</label>
        <input 
        required
        type='text'
        name='doctor'
        value={''}
        />
        <label>Date</label>
        <input 
        required
        type='date'
        name='date'
        value={''}
        />
        <label>Time</label>
        <input 
        required
        type='time'
        name='time'
        value={''}
        />
        <label>In-Person/Video</label>
        <select name='mode'>
          <option value='In-Person'>In-Person</option>
          <option value='Video'>Video</option>
        </select>
        <label>Reason for Visit</label>
        <textarea
          required
          type='text'
          name='reason'
          value={''}
        />
      </form>
    </main>
  )
}

export default NewAppointment
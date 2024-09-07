// npm modules
import { NavLink } from 'react-router-dom'

// components
import * as appointmentService from '../../services/appointmentService'

// css
import styles from './AppointmentCard.module.css'

const AppointmentCard = ({ appointment }, props) => {
  return (
    <main>
        <article className={styles.container}>
          <header>
            <span>
              <h1>DOCTOR WILL GO HERE</h1>
            </span>
          </header>
          <p>Reason: {appointment.reason}</p>
          <p>Type: {appointment.mode}</p>
          <p>Date: {new Date(appointment.appointmentDate).toISOString().split('T')[0]}</p>
          <p>Time:{appointment.time}</p>
          <NavLink to='/appointment/edit' state={appointment}>
            <button>Edit</button>
          </NavLink>
          <button onClick={() => props.handleDeleteAppointment(appointment._id)}>
            DELETE
          </button>
        </article>
      </main>
  )
}

export default AppointmentCard
// npm modules
import { NavLink } from 'react-router-dom'

// components

// css
import styles from './AppointmentCard.module.css'

const AppointmentCard = ({ appointment }) => {
  return (
    <main>
        <article className={styles.container}>
          <header>
            <span>
              <h1>Appointment</h1>
            </span>
          </header>
          <p>{appointment.date}</p>
          <p>{appointment.time}</p>
          <p>{appointment.reason}</p>
          <p>{appointment.mode}</p>
          <p>DOCTOR WILL GO HERE</p>
          <NavLink to='/appointment/edit' state={appointment}>
            <button>Edit</button>
          </NavLink>
        </article>
      </main>
  )
}

export default AppointmentCard
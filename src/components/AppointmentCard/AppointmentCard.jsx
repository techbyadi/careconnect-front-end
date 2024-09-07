// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './AppointmentCard.module.css'

// components
import Icon from '../Icon/Icon'

const AppointmentCard = ({ appointment, handleDeleteAppointment}) => {
  return (
    <main>
      <article className={styles.container}>
        <header>
          <span>
            <h1>DOCTOR WILL GO HERE</h1>
            <div>
              <NavLink to='/appointment/edit' state={appointment}>
                <Icon category='Edit'/>
              </NavLink>
              <NavLink onClick={() => handleDeleteAppointment(appointment._id)}>
                <Icon category='Trash' />
              </NavLink>
            </div>
          </span>
        </header>
        <p>Reason: {appointment.reason}</p>
        <p>Type: {appointment.mode}</p>
        <p>Date: {new Date(appointment.appointmentDate).toISOString().split('T')[0]}</p>
        <p>Time:{appointment.time}</p>
      </article>
    </main>
  )
}

export default AppointmentCard
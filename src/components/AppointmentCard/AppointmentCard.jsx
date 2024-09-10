

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
            <h1>On {new Date(appointment.appointmentDate).toDateString()} with {appointment.doctor?.name}</h1>
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
        <p>Time: {appointment.time}</p> <br />
        <p>Reason: {appointment.reason}</p> <br />
        <p>Type: {appointment.mode}</p>
      </article>
    </main>
  )
}

export default AppointmentCard
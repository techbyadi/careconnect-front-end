// css
import styles from './AppointmentList.module.css'

// components
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'

const AppointmentList = (props) => {
  return (
    <>
      <h1>My Appointments</h1>
      <main className={styles.container}>
        {props.appointments.map(appointment =>
          <AppointmentCard appointment={appointment}
            key={appointment._id} 
            handleDeleteAppointment = {props.handleDeleteAppointment}
          />
        )}
      </main>
    </>
  )
}

export default AppointmentList
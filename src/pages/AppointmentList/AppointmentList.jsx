// css
import styles from './AppointmentList.module.css'

// components
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'

const AppointmentList = (props) => {
  console.log("Props on app list page", props.handleDeleteAppointment);
  return (
    <>
      <h1>MY Appointments</h1>
      <main className={styles.container}>
        {props.appointments.map(appointment =>
          <AppointmentCard appointment={appointment}
          key={appointment._id} 
          handleDeleteAppointment = {props.handleDeleteAppointment}/>
        )}
      </main>
    </>
  )
}

export default AppointmentList
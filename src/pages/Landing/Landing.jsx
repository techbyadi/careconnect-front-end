// css
import styles from './Landing.module.css'

//components
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import SearchCard from '../../components/SearchCard/SearchCard'

const Landing = (props) => {
  return (
    <>
    <main>  
      <section className={styles.search}>
        
      <p className={styles.message}>{props.message}</p>
      <br />
      
        <SearchCard handleDoctorSearch = {props.handleDoctorSearch}/>
      </section>
    </main>
        <section className={styles.div}>
          {props.doctors.map(doctor => (
            <DoctorCard key={doctor._id} doctor = {doctor}/>
          ))}   
        </section>
        </>
  )
}

export default Landing

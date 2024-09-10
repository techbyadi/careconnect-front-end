// css
import styles from './Landing.module.css'

//components
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import SearchCard from '../../components/SearchCard/SearchCard'

const Landing = (props) => {
  return (
    <>
    <main>
      <header>
        <h1>Search Doctor</h1>
        </header>
      <section className={styles.search}>
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

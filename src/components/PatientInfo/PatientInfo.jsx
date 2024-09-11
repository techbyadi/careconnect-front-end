// assets
import profileIcon from '../../assets/icons/profile.png'

// css
import styles from './PatientInfo.module.css'

const PatientInfo = ({ content }) => {
  const photo = content.patient.photo ? content.patient.photo : profileIcon

  return (
    <div className={styles.container}>
      <img src={photo} alt="The patient's avatar" />
      <section>
        <h4>{content.patient.name}</h4>
      </section>
    </div>
  )
}

export default PatientInfo

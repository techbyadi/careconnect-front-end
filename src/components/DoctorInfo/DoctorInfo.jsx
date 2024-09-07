// css
import styles from "./DoctorInfo.module.css";

const DoctorInfo = ({ doctor }) => {

  return (
    <article className={styles.container}>
    <img src={doctor.photo} alt="Doctor's photo" />
    <header>
      <span>
        <h1>{doctor.name}</h1>
      </span>
      <p>🩺 {doctor.specialization}</p>
      <p>📍{doctor.location}</p>
    </header>
  </article>
  );
};

export default DoctorInfo;

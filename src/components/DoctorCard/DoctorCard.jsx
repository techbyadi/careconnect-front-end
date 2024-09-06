// npm modules
import { NavLink } from "react-router-dom";

// css
import styles from "./DoctorCard.module.css";

const DoctorCard = ({ doctor }) => {
  return (
    <NavLink to={`/blogs/${doctor._id}`}>
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
    </NavLink>
  );
};

export default DoctorCard;

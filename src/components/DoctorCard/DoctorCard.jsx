// npm modules
import { NavLink } from "react-router-dom";
import { useRef } from 'react';

//pages
import DoctorDetails from '../../pages/DoctorDetails/DoctorDetails'


// css
import styles from "./DoctorCard.module.css";

const DoctorCard = ({ doctor }) => {

  const docDetailsRef = useRef(null);

  const showDoctorDetails = () => {
    if (docDetailsRef.current) {
      docDetailsRef.current.handleOpen();
    }
  };

  return (
    <>
    <NavLink to='#' onClick={showDoctorDetails}>
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
    <DoctorDetails doctor={doctor} docDetailsRef= {docDetailsRef}/>
    </>
  );
};

export default DoctorCard;

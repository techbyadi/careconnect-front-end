// npm modules
import { NavLink } from "react-router-dom";
import { useRef } from "react";

//pages
import DoctorDetails from "../../pages/DoctorDetails/DoctorDetails";
import DoctorInfo from "../../components/DoctorInfo/DoctorInfo";

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
      <NavLink to="#" onClick={showDoctorDetails}>
      <article className={styles.container}>
      <header>
      <DoctorInfo doctor={doctor} />
        </header>
     
      </article>
        
      </NavLink>
      <DoctorDetails doctor={doctor} docDetailsRef={docDetailsRef} />
    </>
  );
};

export default DoctorCard;

// npm modules
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

//pages
import DoctorDetails from "../../pages/DoctorDetails/DoctorDetails";
import DoctorInfo from "../../components/DoctorInfo/DoctorInfo";

// css
import styles from "./DoctorCard.module.css";

const DoctorCard = ({ doctor }) => {
  const docDetailsRef = useRef(null);
  const navigate = useNavigate();
  
  const handleClickReview = () => {
    navigate("/reviews", { state: { doctor } });
  };

  const showDoctorDetails = () => {
    if (docDetailsRef.current) {
      docDetailsRef.current.handleOpen();
    }
  };

  return (
    <>
      <article className={styles.container} onClick={showDoctorDetails}>
        <header>
          <DoctorInfo doctor={doctor} />
        </header>
          <div>
            ⭐️
            &nbsp; <a
              href=""
              onClick={(evt) => {
                evt.stopPropagation();
                handleClickReview();
              }}
            >
              Reviews
            </a>
          </div>
      </article>
      <DoctorDetails doctor={doctor} docDetailsRef={docDetailsRef} />
    </>
  );
};

export default DoctorCard;

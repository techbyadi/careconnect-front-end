// npm modules
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Rating } from "@mui/material";
import React from "react";

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
      <article className={styles.container}>
        <NavLink to="#" onClick={showDoctorDetails}>
          <header>
            <DoctorInfo doctor={doctor} />
            <p>
              <div>
                ⭐️
                <a href="" onClick={() => handleClickReview()}>
                  Reviews
                </a>
              </div>
            </p>
          </header>
        </NavLink>
      </article>

      <DoctorDetails doctor={doctor} docDetailsRef={docDetailsRef} />
    </>
  );
};

export default DoctorCard;

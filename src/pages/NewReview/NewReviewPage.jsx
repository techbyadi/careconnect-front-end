// npm modules
import { useLocation } from 'react-router-dom';

// services
import * as doctorService from '../../services/doctorService'

// components
import NewReview from "../../components/NewReview/NewReview";
import DoctorCard from '../../components/DoctorCard/DoctorCard';

// css
import styles from "./NewReview.module.css"

const NewReviewPage = (doctor, setDoctor) => {
  const location = useLocation();

  const handleAddReview = async reviewFormData => {
    const newReview = await doctorService.createReview(location.state.doctor._id, reviewFormData)
    setDoctor({ ...location.state.doctor, reviews: [...location.state.doctor.reviews, newReview] })
  }

  return (
    <main className={styles.container}>
      <section>
      <header>
      <DoctorCard doctor={location.state.doctor} />
        </header>
      </section>
      <NewReview handleAddReview={handleAddReview}/>
    </main>
  )
}
 
export default NewReviewPage;
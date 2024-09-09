// npm modules
import { useLocation } from 'react-router-dom';

// services
import * as doctorService from '../../services/doctorService'

// components
import NewReview from "../../components/NewReview/NewReview";
import DoctorInfo from '../../components/DoctorInfo/DoctorInfo';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

// css
import styles from "./ReviewsPage.module.css"

const NewReviewPage = (doctor, setDoctor) => {
  const location = useLocation();

  const handleAddReview = async reviewFormData => {
    const newReview = await doctorService.createReview(location.state.doctor._id, reviewFormData)
    setDoctor({ ...location.state.doctor, reviews: [...location.state.doctor.reviews, newReview] })
  }

  return (
    <main className={styles.container}>
      <section className='reviewSection'>
        <DoctorInfo doctor={location.state.doctor} />
        <NewReview handleAddReview={handleAddReview}/>
      </section>
      <section>
      {location.state.doctor.reviews.map((review) =>
        <ReviewCard
        key={review._id}
        review={review}
        />
          )}
      </section>
    </main>
  )
}
 
export default NewReviewPage;
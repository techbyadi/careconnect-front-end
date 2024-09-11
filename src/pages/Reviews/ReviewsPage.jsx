// npm modules
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// services
import * as doctorService from '../../services/doctorService'

// components
import NewReview from "../../components/NewReview/NewReview";
import DoctorInfo from '../../components/DoctorInfo/DoctorInfo';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

// css
import styles from "./ReviewsPage.module.css"

const ReviewsPage = (props) => {
  const location = useLocation()
  const [doctor, setDoctor] = useState({reviews: []})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async() => {
      const doctorData = await doctorService.show(location.state.doctor._id)
      setDoctor(doctorData)
      setLoading(false)
    }
    fetchDoctor()    
  }, [location.state.doctor])

  const handleAddReview = async reviewFormData => {
    const newReview = await doctorService.createReview(doctor._id, reviewFormData)
    setDoctor({ ...doctor, reviews: [newReview, ...doctor.reviews, ] })
  }

  const handleDeleteReview = async (doctorId, reviewId) => {
    await doctorService.deleteReview(doctorId, reviewId)
    setDoctor({ ...doctor, reviews: doctor.reviews.filter((c) => c._id !== reviewId) })
  }
  
  return (
    <main className={styles.container}>
      <section className='reviewSection'>
      <DoctorInfo doctor={location.state.doctor} />
        {props.user ? <NewReview handleAddReview={handleAddReview}/> : null}        
      </section>
      <section>
        {loading? <h4> ⌛ Loading Reviews... </h4> :
      (doctor.reviews.map((review) =>
        <ReviewCard
        key={review._id}
        review={review}
        doctor={doctor}
        currentUser={props.user}
        handleDeleteReview={handleDeleteReview}
        />
          ))
        }
      </section>
    </main>
  )
}

export default ReviewsPage;
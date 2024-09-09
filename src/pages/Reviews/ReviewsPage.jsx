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

  useEffect(() => {
    const fetchDoctor = async() => {
      const doctorData = await doctorService.show(location.state.doctor._id)
      setDoctor(doctorData)
    }
    fetchDoctor()    
  }, [location.state.doctor])

  const handleAddReview = async reviewFormData => {
    const newReview = await doctorService.createReview(doctor._id, reviewFormData)
    setDoctor({ ...doctor, reviews: [...doctor.reviews, newReview] })
  }

  const publicComponents = (
    <DoctorInfo doctor={location.state.doctor} />
  )

  const protectedComponents = (
    <>
    <DoctorInfo doctor={location.state.doctor} />
    <NewReview handleAddReview={handleAddReview}/>
    </>
  )

  return (
    <main className={styles.container}>
      <section className='reviewSection'>
        {props.user ? protectedComponents : publicComponents}        
      </section>
      <section>
      {doctor.reviews.map((review) =>
        <ReviewCard
        key={review._id}
        review={review}
        />
          )}
      </section>
    </main>
  )
}
 
export default ReviewsPage;
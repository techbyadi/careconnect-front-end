// npm modules

// services
import * as doctorService from '../../services/doctorService'

// components
import NewReview from "../../components/NewReview/NewReview";

// css
import styles from "./NewReview.module.css"

const NewReviewPage = (doctor, setDoctor) => {

  const handleAddReview = async reviewFormData => {
    const newReview = await doctorService.createReview(doctorId, reviewFormData)
    setDoctor({ ...doctor, reviews: [...doctor.reviews, newReview] })
  }

  return (
    <main>
      <h1>{doctor.name}</h1>
      <NewReview handleAddReview={handleAddReview}/>
    </main>
  )
}
 
export default NewReviewPage;
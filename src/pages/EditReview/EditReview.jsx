// npm modules
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

//css
import styles from "./EditReview.module.css";

// components
import * as doctorService from '../../services/doctorService'

const EditReview = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  const [reviewFormData, setReviewFormData] = useState(state.review)

  const handleChange = (evt) => {
    setReviewFormData({
      ...reviewFormData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('name of doctor', state);
    await doctorService.updateReview(state.doctor._id, reviewFormData)
    navigate(`/reviews`, {state:state})
  }

  return (
    <form  className={styles.container} onSubmit={handleSubmit}>
      <h1>Edit Review</h1>
      <textarea 
        required
        type="text"
        name="content"
        value={reviewFormData.content}
        placeholder="Write a review"
        onChange={handleChange}
      />
      <label>Rating
        <select
        required
        name='rating'
        value={reviewFormData.rating}
        onChange={handleChange}> 
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
          <option value="5" >5</option>                    
        </select>
        </label>
        <button type="submit">Save Changes</button>
    </form>
  );
  
}
 
export default EditReview;
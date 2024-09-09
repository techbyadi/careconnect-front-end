//npm modules
import { useState } from "react"

// css
import styles from './NewReview.module.css'

// components
import Icon from '../Icon/Icon'

const NewReview = (props) => {
  const [reviewFormData, setReviewFormData] = useState({
    content: '',
    rating: '1'
  })

  const handleChange = (evt) => {
    setReviewFormData({ ...reviewFormData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddReview(reviewFormData)
    setReviewFormData({ content: '' })
  }

  return (
    <form  className={styles.container} onSubmit={handleSubmit}>
      <textarea 
        required
        name="content"
        value={reviewFormData.content}
        placeholder='Add a Review'
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
        <button type="submit"><Icon category='Create' /></button>
    </form>
  )
}

export default NewReview
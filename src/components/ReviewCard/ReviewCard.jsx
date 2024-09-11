// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from "./ReviewCard.module.css"

// components
import Icon from '../Icon/Icon'

const ReviewCard = (props) => {
  const { 
    review, 
    doctor, 
    currentUser, 
    handleDeleteReview 
  } = props;

  return (
    <main>
      <article className={styles.container}>
        <header>
          <span>
            <h4>{review.rating} star out of 5</h4>  
            <div>
              <h5>Review by {review.author.name}</h5>
              {currentUser.profile === review.author._id && (
                <>
                  <NavLink to='/review/edit' state={{ review, doctor }}>
                    <Icon category='Edit'/>
                  </NavLink>
                  <NavLink 
                  onClick={() => handleDeleteReview(doctor._id, review._id)} state={{ review, doctor }}>
                    <Icon category='Trash' />
                  </NavLink>
                </>
              )}
            </div>
          </span>
        </header>
        <h5>{review.content}</h5>
      </article>
    </main>
  );
}

export default ReviewCard;

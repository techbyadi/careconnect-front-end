// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from "./ReviewCard.module.css"

// components
import Icon from '../Icon/Icon'

const ReviewCard = (props) => {
  // Assume currentUser is passed as a prop
  const { review, doctor, currentUser } = props;

  return (
    <main>
      <article className={styles.container}>
        <header>
          <span>
            <p>Review by {review.author.name}</p>
            {currentUser.profile === review.author._id && (
              <NavLink to='/review/edit' state={{ review, doctor }}>
                <Icon category='Edit'/>
              </NavLink>
            )}
          </span>
          <p>{review.rating} star out of 5</p>  
          <h4>{review.content}</h4>
        </header>
      </article>
    </main>
  );
}

export default ReviewCard;

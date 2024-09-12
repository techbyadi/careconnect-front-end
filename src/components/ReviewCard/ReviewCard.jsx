// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from "./ReviewCard.module.css"

// assets
import profileIcon from '../../assets/icons/profile.png'

// components
import Icon from '../Icon/Icon'
import DateCard from '../DateCard/DateCard'

const ReviewCard = (props) => {
  const { 
    review, 
    doctor, 
    currentUser, 
    handleDeleteReview,
  } = props;
  
  const photo = review.author.photo ? review.author.photo : profileIcon

  return (
    <main>
      <article className={styles.container}>
        <header>
          <div>
            {currentUser?.profile === review.author?._id && (
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
          <h3> &nbsp; ⭐️ {review.rating} / 5 </h3>  
          <span>
            <div>
              &nbsp;&nbsp;<img src={photo} alt="The user's avatar" />
              &nbsp;
              <h5>
                {review.author.name}
                <DateCard createdAt={review.createdAt} />
              </h5>
            </div>
          </span>
        </header>
        <h4>{review.content}</h4>
      </article>
    </main>
  );
}

export default ReviewCard;

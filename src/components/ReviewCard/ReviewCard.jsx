// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from "./ReviewCard.module.css"

// components
import Icon from '../Icon/Icon'

const ReviewCard = (props) => {
  return (
    <main>
      <article className={styles.container}>
        <header>
          <span>
              <p>Review by {props.review.author.name}</p>
              <NavLink to='/review/edit' state={{review : props.review, doctor:props.doctor}}>
                <Icon category='Edit'/>
              </NavLink>
          </span>
            <p>{props.review.rating} star out of 5</p>  
            <h4>{props.review.content}</h4>
        </header>
      </article>
    </main>
  )
}

export default ReviewCard
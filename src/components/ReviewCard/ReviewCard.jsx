//css
import styles from "./ReviewCard.module.css"

const ReviewCard = (props) => {  
  return (
    <main>
      <article className={styles.container}>
        <header>
          <span>
            <p>Review by {props.review.author.name}</p>
            <p>{props.review.rating} star out of 5</p>  
            <h4>{props.review.content}</h4>
          </span>
        </header>
      </article>
    </main>
  )
}
 
export default ReviewCard
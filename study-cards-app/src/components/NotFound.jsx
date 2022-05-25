import styles from "../assets/styles/modules/not-found.module.scss";
import magnifier from "../assets/images/magnifier.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.bgText}>404</p>
        <p className={styles.text}>Ooops!</p>
        <p className={styles.textSmall}>Sorry, page not found</p>
        <Link to="/" className={styles.link}>
            Back to learning
          </Link>
        <div className={styles.image}>
          <img
            className={styles.magnifier}
            src={magnifier}
            alt="magnifier"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

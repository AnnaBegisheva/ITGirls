import styles from "../assets/styles/modules/sidebar.module.scss";
import bgMagnifier from "../assets/images/magnifier.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.magnifierImg}>
        <img src={bgMagnifier} alt="magnifier"></img>
        <Link to="/" className={styles.logo}>
          Vocabulary <span>magnifier!</span>
        </Link>
      </div>
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
}

export default Sidebar;

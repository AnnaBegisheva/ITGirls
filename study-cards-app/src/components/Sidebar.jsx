import styles from "../assets/styles/modules/sidebar.module.scss";
import bgMagnifier from "../assets/images/magnifier.png";
import { Link } from "react-router-dom";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.magnifierImg}>
      <img src={bgMagnifier} alt="magnifier"></img>
      <Link to="/" className={styles.logo}>
        Word magnifier!
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/" className={styles.menuLink}>
            <MenuBookRoundedIcon className={styles.menuIcon}/>
            Learn
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/training" className={styles.menuLink}>
          <SchoolRoundedIcon className={styles.menuIcon}/>
          Practice
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="../vocabulary" className={styles.menuLink}>
          <FactCheckRoundedIcon className={styles.menuIcon}/>
            My vocabulary
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

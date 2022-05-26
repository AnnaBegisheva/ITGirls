import styles from "../assets/styles/modules/sidebar.module.scss";
import { Link } from "react-router-dom";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';

const NavLinks = () =>{
    return (
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
  )
}

export default NavLinks;
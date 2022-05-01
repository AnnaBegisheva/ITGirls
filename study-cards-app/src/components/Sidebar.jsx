import styles from "../assets/styles/modules/sidebar.module.scss";
import bgMagnifier from "../assets/images/magnifier.png";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.magnifierImg}>
        <img src={bgMagnifier} alt="folder"></img>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="../" className={styles.menuLink}>
            Dictionary
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="../" className={styles.menuLink}>
            Training
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="../" className={styles.menuLink}>
            My vocabulary
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

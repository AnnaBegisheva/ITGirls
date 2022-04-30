import styles from "../assets/styles/modules/sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#">Words</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Training</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">My vocabulary</a>
          </li>
        </ul>
    </div>
  );
}

export default Sidebar;

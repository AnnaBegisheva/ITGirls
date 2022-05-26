import NavLinks from "./NavLinks";
import styles from '../assets/styles/modules/burger-menu.module.scss'

const BurgerMenu = () => {
  return (
    <nav className={styles.container}>
      <NavLinks />
    </nav>
  );
};

export default BurgerMenu;

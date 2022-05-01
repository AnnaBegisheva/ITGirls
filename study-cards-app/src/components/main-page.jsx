import styles from "../assets/styles/modules/main-page.module.scss";
import bgFolder from "../assets/images/folder.png";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar className={styles.sidebar}></Sidebar>
        <Header></Header>

        <Footer></Footer>
        <div className={styles.folderImg}>
          <img src={bgFolder} alt="folder"></img>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

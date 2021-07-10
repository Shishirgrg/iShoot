import styles from "../styles/Footer.module.css";
import { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={styles.footer}>
      <footer>
        <p>&copy; 2021 iShoot. All rights Reserved</p>
      </footer>
      <ArrowUpwardIcon onClick={scrollToTop} className={styles.arrow} />
    </div>
  );
};

export default Footer;

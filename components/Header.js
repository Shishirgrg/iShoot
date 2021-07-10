import React from "react";
import styles from "../styles/Header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import useWindowSize from "../helper/useWindowSize";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const [isActive, setActive] = React.useState(false);
  const { responsiveWidth, responsiveHeigth } = useWindowSize();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div id="navbar">
      <header className={styles.inner}>
        <nav className={styles.center}>
          <h1 onClick={scrollToTop} style={{ color: "#793677" }}>
            iShoot
          </h1>
          <h1 onClick={handleToggle} className={styles.checkBtn}>
            <MenuIcon />
          </h1>
          <div
            className={
              isActive && responsiveWidth < 650 ? styles.nav_close : styles.navs
            }
          >
            <div className={styles.nav_link}>
              <Link
                className={styles.link}
                onClick={handleToggle}
                activeClass="active"
                to="navbar"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <Link
                className={styles.link}
                onClick={handleToggle}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
              <Link
                className={styles.link}
                onClick={handleToggle}
                activeClass="active"
                to="developer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Developers
              </Link>
            </div>
            <a
              className={styles.button}
              href="https://drive.google.com/drive/folders/1Ctcdtv4DUXmYVjSTx6h53YZv_by8ew-C?usp=sharing"
              download
              target="_blank"
            >
              Download
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;

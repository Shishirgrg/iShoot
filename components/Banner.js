import Image from "next/image";
import Header from "./Header";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.banner}>
        <h1 className={styles.title}>iShoot multiplayer Shooting Game</h1>
        <p style={{ marginBottom: "2em" }}>
          An interesting and highly interactive multiplayer First-Person
          Shooting(FPS) game. Battle untill the end. Who will prevail as winner?
          Download the game now and enjoy with your friends while competing each
          other.
        </p>
        <a
          className={styles.button}
          href="https://drive.google.com/drive/folders/1Ctcdtv4DUXmYVjSTx6h53YZv_by8ew-C?usp=sharing"
          download
          target="_blank"
          rel="noreferrer"
        >
          Download Game
        </a>
        <img className={styles.image} src="/GCES.png" alt="This is a image" />
      </div>
    </div>
  );
};

export default Banner;

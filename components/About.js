import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 id="about" className={styles.title}>
        About
      </h1>
      <div className={styles.dash}></div>
      <div className={styles.content}>
        <p>
          iShoot is a multiplayer First-Person Shooting (FPS) android game made
          using unity. Player are placed in a closed environment where they
          fight for a period of time and the player with highest kill wins.
        </p>
        <div className={styles.video}>
          <iframe
            className={styles.frame}
            src="https://player.vimeo.com/video/508672045"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;

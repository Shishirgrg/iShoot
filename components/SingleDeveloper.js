import styles from "../styles/SingleDeveloper.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SingleDeveloper = ({ developer }) => {
  return (
    <div className={styles.card}>
      <img src={developer.image} alt="John" style={{ width: "70%" }} />
      <h1 style={{ color: "plum" }}>{developer.name}</h1>
      <p className={styles.title}>Software Engineer</p>
      <p>Gandaki College of Engineering and Science</p>
      <div className={styles.link} style={{ margin: "24px 0" }}>
        <a href={developer.facebook} target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href={developer.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={developer.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default SingleDeveloper;

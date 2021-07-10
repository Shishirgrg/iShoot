import styles from "../styles/Developer.module.css";
import { developer } from "./developers.data";
import SingleDeveloper from "./SingleDeveloper";

const Developer = () => {
  return (
    <div className={styles.container} id="developer">
      <h1 className={styles.title}>Developers</h1>
      <div className={styles.dash} />
      <div className={styles.devs}>
        {developer.map((dev, i) => (
          <SingleDeveloper key={i} developer={dev} />
        ))}
      </div>
    </div>
  );
};

export default Developer;

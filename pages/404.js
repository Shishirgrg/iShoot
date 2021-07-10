import Link from "next/link";
import styles from "../styles/Home.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1>Sorry this page is not available</h1>
      <Link href="/">Go back</Link>
    </div>
  );
};

export default NotFound;

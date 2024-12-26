import { Link } from "react-router-dom";
// import { logo } from "../assets/logo.png";
import styles from "./LandingPage.module.css";

function Landingpage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {/* <img className={styles.svgIcon} loading="lazy" alt="" src={logo} /> */}
          <a className={styles.formbot}>FormBot</a>
        </div>
        <div className={styles.button_container}>
          <Link to="/signin" className={styles.signIn}>
            <span>Sign in</span>
          </Link>

          <Link to={"/signin"} className={styles.createFromButton}>
            <span>Create a FormBot</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landingpage;

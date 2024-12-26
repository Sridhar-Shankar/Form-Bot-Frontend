import styles from "./Footer.module.css";
import icon from "/assets/icons/contact.svg";
// import { logo } from "../../data/fileImports";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <div className={`flex items-center  ${styles.logo}`}>
            {/* <img className={styles.svgIcon} loading="lazy" alt="" src={logo} /> */}
            <a className={styles.formbot}>FormBot</a>
          </div>
          <p>Made with ❤️ by</p>
          <p> @cuvette</p>
        </div>
        <div>
          <h1>Product</h1>
          <p>
            Status <img src={icon} />
          </p>
          <p>
            Documentation <img src={icon} />
          </p>
          <p>
            Roadmap <img src={icon} />
          </p>
          <p>
            Pricing <img src={icon} />
          </p>
        </div>
        <div>
          <h1>Community</h1>
          <p>
            Discord <img src={icon} />
          </p>
          <p>
            GitHub repository <img src={icon} />
          </p>
          <p>
            Twitter <img src={icon} />
          </p>
          <p>
            LinkedIn <img src={icon} />
          </p>
          <p>
            OSS Friends <img src={icon} />
          </p>
        </div>
        <div>
          <h1>Company</h1>
          <p>
            About <img src={icon} />
          </p>
          <p>
            Contact <img src={icon} />
          </p>
          <p>
            Terms of Service <img src={icon} />
          </p>
          <p>
            Privacy Policy <img src={icon} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

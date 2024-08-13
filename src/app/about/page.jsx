import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
  <div className={styles.imgContainer}>
    <div>
      <Image src="/about.png" fill alt="About Picture" />
    </div>

  </div>
  )
};
export default AboutPage;
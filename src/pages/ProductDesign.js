import React,{useEffect} from "react";
import styles from "./VerificationIps.module.css";
import Soft from "../assets/vip1.webp";
import AOS from "aos";
import ContactAll from "./ContactAll";
const VerificationIps = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

 

  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading} data-aos="fade-up">Product Design & Development</h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <h1 className={styles.title}data-aos="fade-right">Overview</h1>
          <br />
          <p>
          Designing the right product that fits customer demands comes with continuous challenges such as varying needs, technological disruptions, timelines, regulations, budget, risk management, etc. The product interface is how viewers and users interact with your technology, and with that in mind, we create products of excellence and deliver a rich, exceptional user experience.
          </p>
          <br />
          <br />
          <p>
          Our team of experts puts users first and creates groundbreaking products through innovative, tested, impactful, and customer-centric product designs.
          </p>
          <br />
          <br />
          <p>
          VeriFast supports end-to-end product development to enhance your business agility. Overcome the complex development challenges, and build state-of-the-art web products and platforms that secure improved operational efficiency and intuitive digital experiences.
          </p>
        </div>
        <div className={styles["image-section"]}>
          <img src={Soft} alt="img" className={styles.images}data-aos="fade-left" />
        </div>
      </div>
     
      <ContactAll></ContactAll>
    </>
  );
};

export default VerificationIps;

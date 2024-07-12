import React, { useEffect } from "react";
import styles from "./EmbeddedEngineeringService.module.css";
import Soft from "../assets/Quality Engineering.png";
import AOS from "aos";
import ContactAll from "./ContactAll";

const QualityEngineering= () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
    



  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading} data-aos="fade-up">
          Quality Engineering{" "}
        </h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <br />
          <p>
            While businesses continually strive to deliver more delightful user
            experiences, the complexities of testing frameworks are
            correspondingly increasing. In order to build more reliable products
            complying with the highest quality standards, there is a necessity
            to improve quality engineering practices, product release cycle,
            error detection, bug fixing, and every facet of the development and
            testing cycle that influences product quality.
          </p>
          <br />
          <p>Our Quality Engineering & Automation services, blended with an end-to-end ecosystem approach, help organizations deliver premium quality products faster and attain the scalability required to successfully position the solution in the market</p>
        </div>
        <div className={styles["image-section"]}>
          <img
            src={Soft}
            alt="img"
            className={styles.images}
            data-aos="fade-left"
          />
        </div>
      </div>

      <ContactAll></ContactAll>
    </>
  );
};

export default QualityEngineering;

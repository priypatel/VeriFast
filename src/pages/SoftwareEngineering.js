import React, { useEffect } from "react";
import styles from "./EmbeddedEngineeringService.module.css";
import Soft from "../assets/Quality Engineering.png";
import AOS from "aos";
import ContactAll from "./ContactAll";

const SoftwareEngineering= () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading} data-aos="fade-up">
          Software Engineering{" "}
        </h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <br />
          <p>
          Software Engineering allow you to manage the entire software development cycle. Our applications provide traceability and transparency in the software development space, supporting all essential software and product development process activities in a single solution. 
          </p>
          <br />
          <p>Our software service is provided with the assistance of our partner, Mentor Graphics, a Siemens company</p>
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

export default SoftwareEngineering;

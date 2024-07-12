import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className={styles["hero_section"]}>
        <div className={styles.main} >
          <h1 className={styles.main_header}data-aos="fade-down" >VERIFAST TECHNOLOGIES</h1>
          <h1 className={styles["secondary_header"]}>
            The Leader in VLSI Design Verification Services
          </h1>
          <NavLink to="/About">
            <p className={styles.button}>
              LEARN MORE ABOUT CONSULTING SERVICES
            </p>
          </NavLink>
        </div>
      </div>
      <div className={styles["partner-section"]}>
        <div className={styles["partner-title"]} data-aos="fade-right">
          <h2>Our Partners</h2>
        </div>
        <div className={styles["partner-container"]} data-aos="zoom-in">
          <PartnerList />
        </div>
      </div>
    </>
  );
};

const PartnerList = () => {
  const partList = [
    { id: 1, image: "./images/p1.webp" },
    { id: 2, image: "./images/p2.webp" },
    { id: 3, image: "./images/p3.png" },
    { id: 4, image: "./images/p4.webp" },
    { id: 5, image: "./images/p5.webp" },
  ];

  return partList.map((partner) => (
    <Partner key={partner.id} image={partner.image} />
  ));
};

const Partner = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles["partner-card"]} ${isHovered ? styles.zoomIn : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to="/Partners">
        <img src={image} alt="Partner" />
      </NavLink>
    </div>
  );
};

export default Home;

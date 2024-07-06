import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./nav/Navbar";
import { AnimatePresence } from "framer-motion";

import Logo from "../../assets/logos/logo.svg";

import { useLocation } from "react-router-dom";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className="w-30 flex justify-center items-center bg-primary-color p-2 border-solid border-b-2 border-[#FFF]">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-[100px] md:w-[120px] lg:w-[150px] xl:w-[150px]" />
        </Link>
      </div>
      <div className={styles.main}>
        <div className={`${styles.header} z-10`}>
          <div className="flex items-center text-white text-medium">
            MENU
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={styles.button}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Menu;

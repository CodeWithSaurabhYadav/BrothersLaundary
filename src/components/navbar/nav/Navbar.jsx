import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Links from './Links';
import Curve from './Curve';
import Footer from './Footer';
import { User } from '@phosphor-icons/react';

const navItems = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "Our Services",
    route: "/services"
  },
  {
    title: "Locations",
    route: "/locations"
  },
  {
    title: "About Us",
    route: "/about"
  },
  {
    title: "Collections & Delivery",
    route: "/collections-delivery"
  }
]


const NavBar = () => {
    const pathname = useLocation().pathname;
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  
    return (
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
        <div className={styles.body}>
          <div onMouseLeave={() => { setSelectedIndicator(pathname); }} className={styles.nav}>
            <div>
              <Link to="dashboard" className='text-xl flex items-center gap-3 cursor-pointer'><User size={21} /> My account</Link>
            </div>
            <hr></hr>
            {navItems.map((data, index) => {
              return <Links 
                key={index} 
                data={{ ...data, index }} 
                isActive={selectedIndicator == data.route} 
                setSelectedIndicator={setSelectedIndicator}></Links>;
            })}
          </div>
          <Footer />
        </div>
        <Curve />
      </motion.div>
    );
}

export default NavBar

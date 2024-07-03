import React from 'react';
import styles from './style.module.scss';
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, route, index} = data;
  
    return (
      <motion.div className={styles.link} onMouseEnter={() => {setSelectedIndicator(route)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
        <Link to={route}>{title}</Link>
      </motion.div>
    )
  }
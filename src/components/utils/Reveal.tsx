import React, {useEffect, useRef} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
}

const Reveal = ({ children, width="fit-content"} : RevealProps) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden width-{${width}}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5}}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeOut"}}
        className='absolute top-[4] bottom-[4] left-0 right-0 z-20 bg-brand-color'
      ></motion.div>
    </div>
  )
}

export default Reveal
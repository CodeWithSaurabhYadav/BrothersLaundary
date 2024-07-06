export default {
  "fadeInRight": {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
  "fadeOutRight": {
    initial: {
      opacity: 1,
      x: 0,
    },
    enter: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
  }
};
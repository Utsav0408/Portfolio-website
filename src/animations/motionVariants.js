export const easeOutQuint = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeOutQuint },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOutQuint },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOutQuint },
  },
}

export const zoomReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: easeOutQuint },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
}

export const wordItem = {
  hidden: { opacity: 0, y: 18, rotateX: -35 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: easeOutQuint },
  },
}

export const floatingBlob = {
  animate: {
    x: [0, 16, -12, 0],
    y: [0, -14, 10, 0],
    scale: [1, 1.08, 0.96, 1],
    rotate: [0, 12, -8, 0],
    transition: {
      duration: 14,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
}

export const cardLift = {
  rest: { y: 0, rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 6,
    rotateY: -6,
    transition: { duration: 0.35, ease: easeOutQuint },
  },
}
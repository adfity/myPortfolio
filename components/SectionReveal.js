'use client';

import { motion } from 'motion/react';

export default function SectionReveal({ from = 'left', className, children, ...rest }) {
  const offset = from === 'left' ? -60 : 60;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
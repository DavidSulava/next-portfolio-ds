'use client';

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

const TestPage: FC = () => {
  const variants: Variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition:{
        duration:3
      }
    },
    variant2: {
      x: 100,
      y: -300,
      // rotation: 90,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        variants={variants}
        animate="variant1"
      ></motion.div>
    </div>
  );
};

export default TestPage;

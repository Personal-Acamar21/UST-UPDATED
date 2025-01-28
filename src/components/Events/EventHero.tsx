import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';

interface EventHeroProps {
  images: string[];
}

export default function EventHero({ images }: EventHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[600px] mb-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Event ${currentIndex + 1}`}
            className="w-full h-full object-contain bg-black"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Button
          href="https://ustsoccer.demosphere-secure.com/_registration"
          className="bg-[#8ED204] text-black px-8 py-3 rounded-lg hover:bg-[#8ED204]/90 text-center text-lg font-bold"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}
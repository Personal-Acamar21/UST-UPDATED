import React from 'react';
import { motion } from 'framer-motion';

interface CompetitionCardProps {
  name: string;
  image: string;
  index: number;
}

export default function CompetitionCard({ name, image, index }: CompetitionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-32 p-4 flex items-center justify-center bg-gray-50">
        <img
          src={image}
          alt={name}
          className="max-h-full w-auto object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-[#8ED204]">{name}</h3>
      </div>
    </motion.div>
  );
}
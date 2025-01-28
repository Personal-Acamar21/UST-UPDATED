import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

export default function FinancialAidHero() {
  return (
    <div className="relative bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <DollarSign className="h-16 w-16 text-[#8ED204] mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">UST Financial Aid Package</h1>
          <p className="text-xl text-gray-300">
            Empowering talent and creating opportunities for a brighter future in academy soccer
          </p>
        </motion.div>
      </div>
    </div>
  );
}
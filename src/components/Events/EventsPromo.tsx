import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventsPromo() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#8ED204]/10 rounded-lg p-8"
        >
          <div className="flex items-start mb-6">
            <Calendar className="h-12 w-12 text-[#8ED204] mr-4 flex-shrink-0" />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Upcoming Events & Tournaments</h2>
              <p className="text-gray-300">
                Don't miss out on our exciting events! From tournaments and clinics to special training sessions, we offer a variety of opportunities for players to showcase their skills and continue their development.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center bg-[#8ED204] text-black px-6 py-3 rounded-lg hover:bg-[#8ED204]/90 transition-colors font-semibold"
              >
                View Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
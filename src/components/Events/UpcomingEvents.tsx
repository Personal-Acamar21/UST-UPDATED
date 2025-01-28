import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEvents } from '../../lib/cms';
import EventCard from './EventCard';
import LoadingSpinner from '../LoadingSpinner';

export default function UpcomingEvents() {
  const { data: events = [], isLoading, error } = useEvents();

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return null;

  const upcomingEvents = events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  if (upcomingEvents.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Upcoming Events & Tournaments
          </motion.h2>
          <Link 
            to="/events"
            className="text-[#8ED204] hover:text-[#8ED204]/80 font-semibold"
          >
            View All Events →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
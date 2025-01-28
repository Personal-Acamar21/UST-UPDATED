import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useEvents } from '../lib/cms';
import EventCard from '../components/Events/EventCard';
import EventHero from '../components/Events/EventHero';
import LoadingSpinner from '../components/LoadingSpinner';

const heroImages = [
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6753588243cf56d1942f2f63.png",
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67521955fc9c33b3d4f43995.png",
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67521955fc9c3327f8f43994.png"
];

export default function Events() {
  const { data: events = [], isLoading, error } = useEvents();

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div>Error loading events</div>;

  const upcomingEvents = events.filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  return (
    <>
      <Helmet>
        <title>Events - UST Soccer Academy</title>
        <meta name="description" content="Join our upcoming soccer events, tournaments, camps, and clinics at UST Soccer Academy." />
      </Helmet>

      <EventHero images={heroImages} />

      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">
            Join us for exciting soccer events and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No upcoming events at the moment.</p>
            <p className="text-gray-500">Please check back later or contact us for more information.</p>
          </div>
        )}
      </div>
    </>
  );
}
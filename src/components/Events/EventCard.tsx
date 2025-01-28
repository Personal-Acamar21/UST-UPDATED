import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, DollarSign, Calendar, Mail, Phone } from 'lucide-react';
import { CMSEvent } from '../../types/cms';
import EventSchedule from '../EventSchedule';
import Button from '../Button';

interface EventCardProps {
  event: CMSEvent;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-4">
            <span className="inline-block bg-[#8ED204] text-black px-2 py-1 rounded text-sm font-semibold">
              {event.type}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{event.title}</h3>
        <p className="text-gray-600 mb-6">{event.description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-3 text-[#8ED204]" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-3 text-[#8ED204]" />
            <span>
              {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-3 text-[#8ED204]" />
            <span>Ages: {event.ageGroups.join(', ')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-5 w-5 mr-3 text-[#8ED204]" />
            <span>${event.price.amount} {event.price.note && `(${event.price.note})`}</span>
          </div>
        </div>

        {event.schedule && <EventSchedule schedule={event.schedule} />}

        {event.features && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="list-none space-y-2">
              {event.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.contact && (
          <div className="mt-6 space-y-2">
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-3 text-[#8ED204]" />
              <span>{event.contact.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-3 text-[#8ED204]" />
              <span>{event.contact.phone}</span>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button
            href="https://ustsoccer.demosphere-secure.com/_registration"
            className="w-full bg-[#8ED204] text-black px-6 py-2 rounded-lg hover:bg-[#8ED204]/90 text-center"
          >
            Register Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
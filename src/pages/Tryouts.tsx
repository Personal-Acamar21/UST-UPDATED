import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';

export default function Tryouts() {
  const registrationUrl = "https://ustsoccer.demosphere-secure.com/_registration_login?to=https%3A%2F%2Fustsoccer.demosphere-secure.com%2F_registration%23registrant";

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Tryouts</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Upcoming Tryout Dates</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-[#8ED204] mr-3" />
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-[#8ED204] mr-3" />
              <span>TBD</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#8ED204] mr-3" />
              <span>TBD</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">What to Bring</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
              Soccer cleats
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
              Shin guards
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
              Water bottle
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
              Athletic wear
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-[#8ED204] rounded-full mr-2"></div>
              Recent photo
            </li>
          </ul>
        </div>
      </div>

      <Button
        href={registrationUrl}
        className="w-full md:w-auto bg-[#8ED204] text-black px-8 py-3 rounded-lg hover:bg-[#8ED204]/90 transition duration-300"
      >
        Register for Tryouts
      </Button>
    </div>
  );
}
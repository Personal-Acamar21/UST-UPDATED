import React from 'react';
import { Heart, Award, Users, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function USTCares() {
  const registrationUrl = "https://ustsoccer.demosphere-secure.com/_registration_login?to=https%3A%2F%2Fustsoccer.demosphere-secure.com%2F_registration%23registrant";

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">UST Cares</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Heart className="h-12 w-12 text-[#8ED204] mb-4" />
          <h3 className="text-xl font-bold mb-2">Community Support</h3>
          <p className="text-gray-600 mb-4">Supporting youth development through soccer.</p>
        </div>
        <Link 
          to="/financial-aid" 
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <DollarSign className="h-12 w-12 text-[#8ED204] mb-4" />
          <h3 className="text-xl font-bold mb-2">Financial Aid</h3>
          <p className="text-gray-600 mb-4">Providing assistance to make soccer accessible for all.</p>
        </Link>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
        <p className="mb-6">
          Join us in making a difference in our community through the power of soccer.
          Whether through donations, volunteering, or spreading awareness, every contribution helps.
        </p>
        <div className="flex gap-4">
          <Button
            href={registrationUrl}
            className="bg-[#8ED204] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300"
          >
            Donate Now
          </Button>
          <Button
            href={registrationUrl}
            className="bg-[#8ED204] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300"
          >
            Volunteer
          </Button>
        </div>
      </div>
    </div>
  );
}
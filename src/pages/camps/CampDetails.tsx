import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, DollarSign, Mail, Phone } from 'lucide-react';

interface CampDetailsProps {
  title: string;
  flyerImage: string;
  dates: string;
  time: string;
  location: string;
  cost: string;
  ages?: string;
  description?: string;
  registrationUrl: string;
}

export default function CampDetails({
  title,
  flyerImage,
  dates,
  time,
  location,
  cost,
  ages,
  description,
  registrationUrl
}: CampDetailsProps) {
  return (
    <>
      <Helmet>
        <title>{title} - UST Soccer Academy</title>
        <meta name="description" content={`Join the ${title} at UST Soccer Academy. ${description || ''}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src={flyerImage}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-[#8ED204] mr-3" />
                  <span>{dates}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#8ED204] mr-3" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#8ED204] mr-3" />
                  <span>{location}</span>
                </div>
              </div>

              <div className="space-y-4">
                {ages && (
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Ages:</span>
                    <span>{ages}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-[#8ED204] mr-3" />
                  <span>{cost}</span>
                </div>
              </div>
            </div>

            {description && (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">About the Program</h2>
                <p className="text-gray-600">{description}</p>
              </div>
            )}

            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#8ED204] mr-3" />
                <a href="mailto:INFO@USTSOCCER.COM" className="hover:text-[#8ED204]">INFO@USTSOCCER.COM</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#8ED204] mr-3" />
                <a href="tel:631-506-6557" className="hover:text-[#8ED204]">631-506-6557</a>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#8ED204] text-black px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#8ED204]/90 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import Button from '../components/Button';

export default function WinterIntramuralTraining() {
  return (
    <>
      <Helmet>
        <title>Winter Intramural Training - UST Soccer Academy</title>
        <meta name="description" content="Winter intramural training program for boys and girls born 2021-2017" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67521955fc9c3327f8f43994.png"
              alt="Winter Intramural Training"
              className="w-full h-auto"
            />

            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">UST Winter Intramural Training</h1>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>December 14 - March 22</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>10AM-11AM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>Christ Lutheran Church, East Northport</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>Ages: 2021-2017</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-[#8ED204] mr-3" />
                    <span>$175</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href="https://ustsoccer.demosphere-secure.com/_registration"
                  className="w-full bg-[#8ED204] text-black px-6 py-3 rounded-lg text-center hover:bg-[#8ED204]/90"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const camps = [
  {
    id: 'residential-camp-2025',
    title: '2025 UST Summer Residential Camp',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6783ed3169da5f2e9022fd5b.png',
    type: 'Residential Camp',
    status: 'upcoming',
    path: '/camps/residential-camp-2025'
  },
  {
    id: 'spring-break-camp-2024',
    title: 'Spring Break Camp',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67642a827e62116f0aabf095.png',
    type: 'Day Camp',
    status: 'upcoming',
    path: '/camps/spring-break-2024'
  },
  {
    id: 'intense-summer-2025',
    title: '2025 Intense Summer Camp Series',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6764322f9ea100a3a8951ff2.png',
    type: 'Intense Training',
    status: 'upcoming',
    path: '/camps/intense-summer-2025'
  }
];

export default function CampsClinics() {
  return (
    <>
      <Helmet>
        <title>Camps & Clinics - UST Soccer Academy</title>
        <meta name="description" content="Join our specialized soccer camps and clinics at UST Soccer Academy. Programs for all age groups and skill levels." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8">Upcoming Camps & Clinics</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp, index) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Link to={camp.path} className="block">
                  <div className="relative h-48">
                    <img
                      src={camp.thumbnail}
                      alt={camp.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="inline-block bg-[#8ED204] text-black px-2 py-1 rounded text-sm font-semibold">
                          {camp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{camp.title}</h3>
                    <div className="mt-6">
                      <span className="w-full bg-[#8ED204] text-black px-6 py-2 rounded-lg hover:bg-[#8ED204]/90 text-center block">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration CTA */}
        <div className="bg-black text-white p-8 rounded-lg mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
            <p className="mb-6">
              Secure your spot in our upcoming camps and clinics. Early registration discounts available!
            </p>
            <a 
              href="https://ustsoccer.demosphere-secure.com/_registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8ED204] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
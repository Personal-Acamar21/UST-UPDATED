import React from 'react';
import { motion } from 'framer-motion';
import CompetitionCard from './CompetitionCard';

const leagues = [
  {
    name: "EDP/NY Club Soccer",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67535029d1a1315c9fad5d82.png"
  },
  {
    name: "US Youth Soccer",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/675350296a09d9c01fce7c4b.png"
  },
  {
    name: "NY Club Soccer/EDP",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/675350296a09d91ab4ce7c4c.png"
  },
  {
    name: "USYS National League",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67535029fc8f13b42813477f.png"
  }
];

const tournaments = [
  {
    name: "NY East Meadow Tournament",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67535029182a7e4de76e9dd7.png"
  },
  {
    name: "EDP Fall Cup",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67535286d1a1315161ad5ec9.png"
  },
  {
    name: "Massapequa Thanksgiving Tournament",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6753553eed7e774c419b3b7b.png"
  },
  {
    name: "Bethesda Premier Cup",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6753553e6a09d9b1ffce7fc1.png"
  },
  {
    name: "FC Delco",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/675350291fb0996aa6380e92.png"
  },
  {
    name: "PDA Spring Kick Off",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6753553e988a5f2afb9bd503.png"
  },
  {
    name: "Potomac Memorial Tournament",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6753553f182a7ea3a46ea13e.png"
  },
  {
    name: "USYS National League Tournament",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67535029fc8f13b42813477f.png"
  }
];

export default function CompetitionsSection() {
  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Competitions</h2>
        <p className="text-xl text-gray-600">
          We compete all year around at the top regional and national leagues and tournaments
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Tournaments Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#8ED204]">Tournaments</h3>
          <div className="grid gap-6">
            {tournaments.map((tournament, index) => (
              <CompetitionCard
                key={tournament.name}
                name={tournament.name}
                image={tournament.image}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Leagues Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#8ED204]">Leagues</h3>
          <div className="grid gap-6">
            {leagues.map((league, index) => (
              <CompetitionCard
                key={league.name}
                name={league.name}
                image={league.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
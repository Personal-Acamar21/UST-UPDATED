import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import CompetitionsSection from '../components/Teams/CompetitionsSection';

export default function OurTeams() {
  const teams = {
    boys: [
      { id: "boys-2017", name: "Boys 2017", description: "Elite Development" },
      { id: "boys-2016", name: "Boys 2016", description: "Elite Development" },
      { id: "boys-2015", name: "Boys 2015", description: "Elite Development" },
      { id: "boys-2014", name: "Boys 2014", description: "Elite Development" },
      { id: "boys-2013", name: "Boys 2013", description: "Elite Development" },
      { id: "boys-2012", name: "Boys 2012", description: "Elite Development" },
      { id: "boys-2011", name: "Boys 2011", description: "Elite Development" },
      { id: "boys-2010", name: "Boys 2010", description: "Elite Development" },
      { id: "boys-2009", name: "Boys 2009", description: "Elite Development" },
      { id: "boys-2008", name: "Boys 2008", description: "Elite Development" }
    ],
    girls: [
      { id: "girls-2017", name: "Girls 2017", description: "Elite Development" },
      { id: "girls-2016", name: "Girls 2016", description: "Elite Development" },
      { id: "girls-2015", name: "Girls 2015", description: "Elite Development" },
      { id: "girls-2014", name: "Girls 2014", description: "Elite Development" },
      { id: "girls-2013", name: "Girls 2013", description: "Elite Development" },
      { id: "girls-2012", name: "Girls 2012", description: "Elite Development" },
      { id: "girls-2011", name: "Girls 2011", description: "Elite Development" },
      { id: "girls-2010", name: "Girls 2010", description: "Elite Development" },
      { id: "girls-2009", name: "Girls 2009", description: "Elite Development" },
      { id: "girls-2008", name: "Girls 2008", description: "Elite Development" }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Teams</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Boys Teams Column */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#8ED204]">Boys Teams</h2>
          <div className="space-y-4">
            {teams.boys.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/team/${team.id}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#8ED204]">{team.name}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <Trophy className="h-4 w-4 text-[#8ED204] mr-2" />
                      <span>{team.description}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Girls Teams Column */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#8ED204]">Girls Teams</h2>
          <div className="space-y-4">
            {teams.girls.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/team/${team.id}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#8ED204]">{team.name}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <Trophy className="h-4 w-4 text-[#8ED204] mr-2" />
                      <span>{team.description}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitions Section */}
      <CompetitionsSection />

      {/* Tryouts Section */}
      <div className="mt-12 bg-black rounded-lg p-8 text-white">
        <div className="flex items-center mb-4">
          <Award className="h-8 w-8 text-[#8ED204] mr-3" />
          <h2 className="text-2xl font-bold">Join Our Elite Teams</h2>
        </div>
        <p className="mb-6">
          Experience professional training, competitive matches, and a pathway to excellence.
        </p>
        <Link 
          to="/tryouts"
          className="inline-flex items-center bg-[#8ED204] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300"
        >
          Register for Tryouts
        </Link>
      </div>
    </div>
  );
}
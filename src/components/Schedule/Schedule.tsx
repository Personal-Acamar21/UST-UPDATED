import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const trainingPrograms = [
  {
    title: "Winter Skill Clinic",
    dates: ["12/14", "12/21", "1/11", "1/25", "2/2", "2/8", "3/1", "3/8", "3/22"],
    groups: [
      {
        name: "Boys & Girls born 2017 - 2013",
        time: "5:30pm - 7pm"
      },
      {
        name: "Boys & Girls born 2012 - 2008",
        time: "7:00pm - 8:30pm"
      }
    ],
    location: {
      name: "Christ Lutheran Church",
      address: "189 Burr Rd, East Northport, NY",
      mapUrl: "https://maps.app.goo.gl/W6WF2DSPKvpFZgZY8"
    }
  },
  {
    title: "Winter Intramural Skill Training",
    dates: ["12/14", "12/21", "1/11", "1/25", "2/2", "2/8", "3/1", "3/8", "3/22"],
    groups: [
      {
        name: "Boys & Girls born 2021 - 2017",
        time: "10am - 11am"
      }
    ],
    location: {
      name: "Christ Lutheran Church",
      address: "189 Burr Rd, East Northport, NY",
      mapUrl: "https://maps.app.goo.gl/W6WF2DSPKvpFZgZY8"
    }
  }
];

interface ScheduleProps {
  showFullSchedule?: boolean;
}

export default function Schedule({ showFullSchedule = false }: ScheduleProps) {
  const displayPrograms = showFullSchedule ? trainingPrograms : [trainingPrograms[0]];

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Training & Game Schedules</h2>
          {!showFullSchedule && (
            <Link 
              to="/schedule"
              className="text-[#8ED204] hover:text-[#8ED204]/80 font-semibold"
            >
              View Full Schedule →
            </Link>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {displayPrograms.map((program, programIndex) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: programIndex * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-[#8ED204] mr-3" />
                <h3 className="text-xl font-bold">{program.title}</h3>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#8ED204] flex-shrink-0 mt-1" />
                  <div>
                    <a
                      href={program.location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8ED204] hover:text-[#8ED204]/80 font-semibold"
                    >
                      {program.location.name}
                    </a>
                    <p className="text-gray-600">{program.location.address}</p>
                  </div>
                </div>

                {/* Training Dates */}
                <div>
                  <h4 className="font-semibold mb-3">Training Dates</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.dates.map((date, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Training Groups */}
                <div className="space-y-4">
                  {program.groups.map((group, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4"
                    >
                      <Clock className="h-5 w-5 text-[#8ED204] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{group.name}</p>
                        <p className="text-gray-600">{group.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
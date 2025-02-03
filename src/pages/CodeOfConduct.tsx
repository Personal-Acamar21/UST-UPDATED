import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function CodeOfConduct() {
  return (
    <>
      <Helmet>
        <title>Code of Conduct - UST Soccer Academy</title>
        <meta name="description" content="Code of conduct and behavioral expectations for UST Soccer Academy participants." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto prose prose-lg"
        >
          <h1 className="text-4xl font-bold mb-8">Code of Conduct</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Player Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Show respect to coaches, teammates, opponents, and officials</li>
              <li>Arrive on time and prepared for all training sessions and games</li>
              <li>Wear appropriate training gear and equipment</li>
              <li>Maintain good sportsmanship at all times</li>
              <li>Follow instructions from coaches and staff</li>
              <li>Support and encourage teammates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Parent/Guardian Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Support your child's commitment to the program</li>
              <li>Respect coaches' decisions and training methods</li>
              <li>Maintain positive sideline behavior during games</li>
              <li>Communicate respectfully with staff and other parents</li>
              <li>Ensure timely arrival and pickup for all sessions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Facility Rules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep facilities clean and tidy</li>
              <li>Follow all posted safety guidelines</li>
              <li>Report any damage or safety concerns to staff</li>
              <li>Respect property and equipment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Disciplinary Actions</h2>
            <p>Violations of this code may result in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verbal warning</li>
              <li>Written warning</li>
              <li>Suspension from activities</li>
              <li>Dismissal from program</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Reporting Violations</h2>
            <p>Report conduct violations to:</p>
            <ul className="list-none space-y-2">
              <li>Email: INFO@USTSOCCER.COM</li>
              <li>Phone: 631-506-6567</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </>
  );
}

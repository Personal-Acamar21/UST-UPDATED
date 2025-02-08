import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Star, Bell } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import { Link } from 'react-router-dom';

const newsletters = [
 
  {
    title: "February 2025 Newsletter",
    date: "February 1, 2025",
    highlights: [
      "Winter Indoor League Higlights and Results",
      "2025 Camps & Clinics Details",
      "New Training Facility Updates",
      "Coach of the Month: Coach Kozy",
      "Pro Game Day: NY City FC vs Inter Miami",
      "Player Spotlights: Player of The Month"
    ],
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png"
     
    content: `Subject: Introducing the New UST Soccer Academy Website & Exciting Upcoming Events`

Dear UST Soccer Academy Members,

We are thrilled to announce the launch of our newly redesigned website. Built with the latest technologies—React, TypeScript, and Tailwind CSS—our new website offers an enhanced user experience designed with you in mind.

Key Features:

Our website features a comprehensive Programs & Training section, offering detailed information about our Youth Development Programs, Elite Training Programs, Cozy Feet Program for ages 2-7, and various upcoming Camps & Clinics.

The integrated Event Management system ensures you never miss an important date, with an Upcoming Events Calendar, an Online Registration System, detailed Event Schedules, and automated Registration Confirmations.

A dynamic Content Management system keeps you updated with the latest News, and our Newsletter System ensures you're always in the loop. Real-time Form Validation and Interactive Components further enhance the user experience.

Winter Indoor League Success

Congratulations to all teams on a successful UST Winter IndoorTournament. Special mention to our U10 boys and U12 girls teams for reaching the finals!
      
Upcoming Events:

Spring Break Camp (April 14th-17th): This camp is a great opportunity for our young players to refine their skills, boost their game IQ, and train with top-tier coaches during the spring break.

UST Intense Summer Camps Series (Registration is Live!): Our summer camps provide elite training and a fun environment for players. Secure your spot today for camps running on:

June 30 - July 3

July 28 - July 31

August 4 - August 7

August 25 - August 28 

Burr Winkle Park, Commack NY.

2025 UST Residential Camp: 

July 19th - 26th 

Join us for an unforgettable experience at the beautiful Venue of Lake George.

Exclusive UST Ticket Offer: 

As a UST Academy member, you have the exclusive opportunity to purchase discounted tickets for the NYCFC vs. Inter Miami match.

September 2025
NYFC vs inter Miami
Time: TBD

We're proud to launch a site that not only looks great but also makes it easier for you to access the information you need. We invite you to visit our new website and explore our exciting range of programs and events.

Looking forward to seeing you on the field,

UST Soccer Academy Team
    `
  }
];

export default function Newsletter() {
  return (
    <>
      <Helmet>
        <title>Newsletter - UST Soccer Academy</title>
        <meta name="description" content="Stay updated with UST Soccer Academy's latest news, events, and announcements through our newsletter." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">UST Academy Newsletter</h1>
          <p className="text-xl text-gray-600">
            Stay connected with the latest updates from UST Soccer Academy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Newsletter Archive */}
          <div className="md:col-span-2 space-y-8">
            {newsletters.map((newsletter, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{newsletter.title}</h2>
                    <span className="text-gray-500">{newsletter.date}</span>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#8ED204] mb-2">Highlights</h3>
                    <ul className="space-y-2">
                      {newsletter.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="h-4 w-4 text-[#8ED204] mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="prose max-w-none">
                    {newsletter.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-black rounded-lg p-6">
              <NewsletterSignup />
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/events" className="flex items-center text-gray-600 hover:text-[#8ED204]">
                    <Calendar className="h-4 w-4 mr-2" />
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://ustsoccer.demosphere-secure.com/_registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#8ED204]"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Register Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

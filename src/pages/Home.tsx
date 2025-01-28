import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Programs from '../components/Programs';
import Schedule from '../components/Schedule/Schedule';
import VideoPreview from '../components/VideoPreview';
import SponsorBanner from '../components/SponsorBanner';
import TestimonialsCarousel from '../components/Testimonials/TestimonialsCarousel';
import ChatAssistant from '../components/ChatAssistant';
import SEO from '../components/SEO';
import BackToTop from '../components/BackToTop';
import EventsPromo from '../components/Events/EventsPromo';
import VideoPlaylist from '../components/VideoPlaylist';

const heroImages = [
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67981276b67a21abdb08487c.png",
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd6e93bcaea0216484b9b.png",
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67535e8029695afe6d6d515d.png",
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6751fdf7895679318d20c5de.jpeg"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO 
        title="Premier Youth Soccer Training"
        description="Join UST Soccer Academy, where champions are made through dedication, skill, and passion. Professional youth soccer training programs for all ages."
      />

      {/* Hero Section */}
      <section className="relative h-screen">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Develop Your Soccer Skills
            <span className="block text-[#8ED204]">Shape Your Future</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Join the premier youth soccer academy where champions are made through dedication, skill, and passion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              to="/tryouts"
              className="bg-[#8ED204] text-black px-8 py-3 rounded-full hover:bg-[#8ED204]/90 inline-flex items-center"
            >
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events Promo Section */}
      <EventsPromo />

      <SponsorBanner />

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About UST Academy</h2>
              <p className="text-lg text-gray-700 mb-6">
                At UST Soccer Academy, we're dedicated to developing not just exceptional soccer players, 
                but well-rounded individuals who excel both on and off the field.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive approach combines technical excellence, tactical understanding, 
                physical development, and mental strength training.
              </p>
              <Link 
                to="/about-us" 
                className="text-[#8ED204] hover:text-[#8ED204]/80 font-semibold inline-flex items-center"
              >
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-8">
              <VideoPlaylist />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#8ED204] p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-black">300+</div>
                  <div className="text-sm text-black">Active Players</div>
                </div>
                <div className="bg-[#8ED204] p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-black">7+</div>
                  <div className="text-sm text-black">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Programs />
      <Schedule />
      <TestimonialsCarousel />
      <ChatAssistant />
      <BackToTop />
    </>
  );
}
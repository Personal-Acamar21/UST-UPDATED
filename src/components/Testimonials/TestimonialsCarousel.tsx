{/* Previous content of TestimonialsCarousel.tsx remains the same, but update the button color */}
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// ... rest of the imports and testimonials data ...

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="bg-black py-12">
      {/* ... rest of the component remains the same ... */}
      
      <div className="text-center mt-8">
        <Link 
          to="/testimonials"
          className="inline-block bg-[#8ED204] text-black px-6 py-2 rounded-lg hover:bg-[#8ED204]/90 transition-colors"
        >
          View All Testimonials
        </Link>
      </div>
    </section>
  );
}
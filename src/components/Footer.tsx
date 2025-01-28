import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* UST ACADEMY Column */}
          <div>
            <h3 className="font-semibold text-[#8ED204] mb-4">UST ACADEMY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-[#8ED204]">ABOUT US</Link></li>
              <li><Link to="/our-staff" className="hover:text-[#8ED204]">OUR STAFF</Link></li>
              <li><Link to="/indoor-facilities" className="hover:text-[#8ED204]">OUR FACILITIES</Link></li>
              <li><Link to="/sponsors" className="hover:text-[#8ED204]">OUR SPONSORS</Link></li>
              <li><Link to="/gallery" className="hover:text-[#8ED204]">PHOTO GALLERY</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#8ED204]">WHAT PARENTS & PLAYERS SAY</Link></li>
            </ul>
          </div>

          {/* Members Support Column */}
          <div>
            <h3 className="font-semibold text-[#8ED204] mb-4">MEMBERS SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-[#8ED204]">HELP CENTER</Link></li>
              <li><Link to="/uniform-policy" className="hover:text-[#8ED204]">UNIFORM RETURN POLICY</Link></li>
              <li><Link to="/track-order" className="hover:text-[#8ED204]">TRACK YOUR ORDER</Link></li>
              <li><Link to="/uniform-guide" className="hover:text-[#8ED204]">HANDLING UNIFORM</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-semibold text-[#8ED204] mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li>ULTIMATE SOCCER TRAINING LLC</li>
              <li>DBA UST KINGS PARK</li>
              <li>P.O. BOX: 312</li>
              <li>KINGS PARK NY 11754</li>
              <li>TEL: 631-506-6567</li>
              <li>INFO@USTSOCCER.COM</li>
            </ul>
          </div>

          {/* News Column */}
          <div>
            <h3 className="font-semibold text-[#8ED204] mb-4">NEWS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/news" className="hover:text-[#8ED204]">LATEST NEWS</Link></li>
              <li><Link to="/news/academy" className="hover:text-[#8ED204]">ACADEMY UPDATES</Link></li>
              <li><Link to="/news/industry" className="hover:text-[#8ED204]">SOCCER INDUSTRY NEWS</Link></li>
              <li><Link to="/events" className="hover:text-[#8ED204]">UST EVENTS</Link></li>
              <li><Link to="/newsletters" className="hover:text-[#8ED204]">NEWSLETTERS</Link></li>
            </ul>
          </div>

          {/* Disclaimers/Policies Column */}
          <div>
            <h3 className="font-semibold text-[#8ED204] mb-4">DISCLAIMERS/POLICIES</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-[#8ED204]">TERMS OF USE</Link></li>
              <li><Link to="/privacy" className="hover:text-[#8ED204]">PRIVACY POLICY</Link></li>
              <li><Link to="/warranty" className="hover:text-[#8ED204]">WARRANTY</Link></li>
              <li><Link to="/refund" className="hover:text-[#8ED204]">REFUND POLICY</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#8ED204]">DISCLAIMER</Link></li>
              <li><Link to="/code-of-conduct" className="hover:text-[#8ED204]">CODE OF CONDUCT</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a 
                href="https://www.facebook.com/ultimatesoccertraining?mibextid=LQQJ4d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#8ED204]"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/ultimatesoccertraining?igsh=eHZxNThodTJpNWNm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#8ED204]"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/ultimate-soccer-training" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#8ED204]"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/USTSoccer" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#8ED204]"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center">
              <Link to="/">
                <img 
                  src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f43edcc7dd116c0479135.png" 
                  alt="UST Soccer Academy" 
                  className="h-20 w-auto"
                />
              </Link>
              <span className="text-sm text-gray-400">© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
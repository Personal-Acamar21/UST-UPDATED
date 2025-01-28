import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: 'ACADEMY',
      dropdownItems: [
        { name: 'ABOUT US', path: '/about-us' },
        { name: 'OUR TEAMS', path: '/our-teams' },
        { name: 'TRYOUTS', path: '/tryouts' },
        { name: 'COZY FEET', path: '/cozy-feet' },
        { name: 'UST CARES', path: '/ust-cares' },
        { name: 'OUR STAFF', path: '/our-staff' },
        { name: 'FINANCIAL AID', path: '/financial-aid' }
      ]
    },
    {
      name: 'CAMPS & CLINICS',
      path: '/camps-clinics'
    },
    {
      name: 'FACILITIES',
      dropdownItems: [
        { name: 'INDOOR', path: '/indoor-facilities' },
        { name: 'OUTDOOR', path: '/outdoor-facilities' }
      ]
    },
    {
      name: 'SHOP DIAZA',
      path: 'https://diaza.com/pages/ust',
      external: true
    },
    {
      name: 'NEWS',
      path: '/news'
    },
    {
      name: 'SPONSORS',
      path: '/sponsors'
    },
    {
      name: 'CONTACT US',
      path: '/contact'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Logo Container */}
      <div className="absolute left-4 top-0 z-50">
        <Link to="/" className="block">
          <img
            src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f43edcc7dd116c0479135.png"
            alt="UST Soccer Academy"
            className="h-48 w-auto md:h-48 sm:h-32"
          />
        </Link>
      </div>

      {/* Welcome Message */}
      <div className="bg-black bg-opacity-90 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg md:text-3xl font-extrabold animate-pulse tracking-wide text-[#8ED204] ml-0 md:ml-40 text-center md:text-left">
            WELCOME TO ULTIMATE SOCCER TRAINING/UST FC ACADEMY
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#8ED204]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-20">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 ml-40">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdownItems ? (
                    <div className="text-black hover:text-white cursor-pointer text-lg font-bold whitespace-nowrap">
                      {item.name}
                      <div className="absolute left-0 mt-2 w-48 bg-[#8ED204] rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-black hover:text-white hover:bg-black/10"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-white text-lg font-bold whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-black hover:text-white text-lg font-bold whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center ml-auto space-x-8">
              {/* Login/Register */}
              <div className="flex items-center space-x-8">
                <a
                  href="https://ustsoccer.demosphere-secure.com/_registration_login?to=https%3A%2F%2Fustsoccer.demosphere-secure.com%2F_registration%23registrant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white text-lg font-bold whitespace-nowrap border-l border-black/20 pl-8"
                >
                  LOGIN/REGISTER
                </a>
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Search */}
              <SearchBar />

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="https://www.facebook.com/ultimatesoccertraining?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/ultimatesoccertraining?igsh=eHZxNThodTJpNWNm" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/ultimate-soccer-training" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/USTSoccer" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-white p-2"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#8ED204] absolute top-full left-0 right-0 shadow-lg">
            <div className="px-4 py-2 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.dropdownItems ? (
                    <div>
                      <div className="text-black font-bold mb-2">{item.name}</div>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-black hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-black hover:text-white font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-black hover:text-white font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Login/Register */}
              <div className="py-4 border-t border-black/20">
                <a
                  href="https://ustsoccer.demosphere-secure.com/_registration_login?to=https%3A%2F%2Fustsoccer.demosphere-secure.com%2F_registration%23registrant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black hover:text-white font-bold"
                >
                  LOGIN/REGISTER
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 py-4 border-t border-black/20">
                <a href="https://www.facebook.com/ultimatesoccertraining?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/ultimatesoccertraining?igsh=eHZxNThodTJpNWNm" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/ultimate-soccer-training" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/USTSoccer" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
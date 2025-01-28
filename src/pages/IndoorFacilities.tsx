import React, { useState } from 'react';
import Button from '../components/Button';
import { MapPin, ExternalLink } from 'lucide-react';

const facilities = [
  {
    name: "Sportime Kings Park Indoor Turf Bubble",
    location: "https://maps.app.goo.gl/S3cjSoXkb6ikW9iP9",
    waiver: "https://www.sportimeny.com/waiver/index.php?id=d2lkXzg4MA&location_id=9"
  },
  {
    name: "Christ Lutheran Church Gym East Northport",
    location: "https://maps.app.goo.gl/W6WF2DSPKvpFZgZY8"
  },
  {
    name: "The Suffolk Y JCC Gym Commack",
    location: "https://maps.app.goo.gl/8JuZ7xmrArKnaAbq5"
  },
  {
    name: "Indoor Turf On The Grind FC Farmingdale",
    location: "https://maps.app.goo.gl/sT85vaHqEiMnrwGx6"
  }
];

export default function IndoorFacilities() {
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Indoor Facilities</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-8">
            <img
              src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6751f2a8988a5f278d99a477.png"
              alt="Indoor Soccer Facility"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <img
                src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f43edcc7dd116c0479135.png"
                alt="UST Logo"
                className="h-20 w-auto"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Field Specifications</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Climate-controlled environment</li>
              <li>• Professional lighting system</li>
              <li>• Player benches and spectator areas</li>
              <li>• Equipment storage</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Our Indoor Facilities</h2>
            <div className="space-y-4">
              {facilities.map((facility) => (
                <div key={facility.name} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{facility.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={facility.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#8ED204] hover:text-[#8ED204]/80"
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      Location
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    {facility.waiver && (
                      <a
                        href={facility.waiver}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#8ED204] hover:text-[#8ED204]/80"
                      >
                        Sign Waiver
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Field Availability</h3>
            <p className="text-gray-600 mb-4">
              Fields are available for team training, matches, and tournaments.
              Advanced booking required for non-academy events.
            </p>
            <Button
              onClick={() => setShowAvailabilityModal(true)}
              className="bg-[#8ED204] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </div>

      {/* Availability Modal */}
      {showAvailabilityModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Field Availability</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Regular Hours</h4>
                <ul className="space-y-1 text-sm">
                  <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                  <li>Saturday: 8:00 AM - 6:00 PM</li>
                  <li>Sunday: 9:00 AM - 5:00 PM</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                For real-time availability and booking requests, please contact us directly.
              </p>
              <div className="flex justify-end">
                <Button
                  onClick={() => setShowAvailabilityModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
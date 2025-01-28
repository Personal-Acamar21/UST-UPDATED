import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Users, ClipboardCheck, Award } from 'lucide-react';
import Button from '../Button';

export default function FinancialAidContent() {
  const features = [
    {
      icon: <Coins className="h-8 w-8 text-[#8ED204]" />,
      title: "Scholarships",
      description: "Merit-based financial support for exceptional talent"
    },
    {
      icon: <Users className="h-8 w-8 text-[#8ED204]" />,
      title: "Grants",
      description: "Need-based assistance for families"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#8ED204]" />,
      title: "Easy Application",
      description: "Streamlined process with dedicated support"
    },
    {
      icon: <Award className="h-8 w-8 text-[#8ED204]" />,
      title: "Sponsorships",
      description: "Partnership opportunities with local businesses"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose max-w-none mb-12"
          >
            <p className="text-lg mb-6">
              Welcome to UST's dedicated page for financial aid in academy soccer! We believe in the power 
              of sports to transform lives and nurture talent. Our commitment is to ensure that economic 
              challenges never hinder a passionate player's dreams.
            </p>
            <p className="text-lg mb-6">
              At UST, we understand that academy soccer can come with a hefty price tag. That's why we're 
              proud to offer a range of financial aid options tailored to support aspiring athletes from 
              all walks of life.
            </p>
            <p className="text-lg mb-6">
              With our scholarships, grants, and sponsorship programs, we aim to level the playing field, 
              allowing every talented individual to thrive and excel in their soccer journey. Our dedicated 
              team is here to guide you through the application process, ensuring that your passion for the 
              sport isn't limited by financial constraints.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              href="https://ustsoccer.demosphere-secure.com/_registration"
              className="bg-[#8ED204] text-black px-8 py-3 rounded-lg hover:bg-[#8ED204]/90 inline-flex items-center"
            >
              Apply for Financial Aid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
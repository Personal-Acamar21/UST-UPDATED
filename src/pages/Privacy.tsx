import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - UST Soccer Academy</title>
        <meta name="description" content="Privacy policy and data protection practices for UST Soccer Academy." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto prose prose-lg"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration information (name, age, contact details)</li>
              <li>Emergency contact information</li>
              <li>Medical information relevant to participation</li>
              <li>Payment information</li>
              <li>Photos and videos from programs and events</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To administer programs and services</li>
              <li>To communicate about programs and events</li>
              <li>To ensure participant safety</li>
              <li>To process payments</li>
              <li>To improve our services</li>
              <li>For marketing and promotional purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p>We do not sell personal information to third parties. Information may be shared with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Program staff and coaches</li>
              <li>Medical personnel in emergencies</li>
              <li>Service providers (e.g., registration systems, payment processors)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We implement reasonable security measures</li>
              <li>Access to personal information is restricted</li>
              <li>Regular security assessments are conducted</li>
              <li>Prompt notification of any data breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Children's Privacy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect children's information only with parental consent</li>
              <li>Parents may review, update, or delete their child's information</li>
              <li>Additional protections for participants under 13 years old</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint about privacy practices</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </>
  );
}

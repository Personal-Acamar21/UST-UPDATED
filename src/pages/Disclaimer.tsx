import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimers - UST Soccer Academy</title>
        <meta name="description" content="Legal disclaimers and liability information for UST Soccer Academy." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto prose prose-lg"
        >
          <h1 className="text-4xl font-bold mb-8">Disclaimers</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Assumption of Risk</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Soccer is a physical activity with inherent risks</li>
              <li>Participation may result in injury</li>
              <li>UST Soccer Academy is not liable for injuries during normal program activities</li>
              <li>Participants assume all risks associated with soccer activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Medical Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Staff are not medical professionals</li>
              <li>Medical emergencies will be referred to appropriate healthcare providers</li>
              <li>Parents/guardians are responsible for medical costs</li>
              <li>Participants must have their own health insurance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Results Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Individual results may vary</li>
              <li>No guarantees of specific skill development or advancement</li>
              <li>Success depends on participant effort and dedication</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Website Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website content is provided "as is"</li>
              <li>No guarantees of website availability or accuracy</li>
              <li>Links to third-party websites are not endorsements</li>
              <li>Technical issues may affect online registration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p>UST Soccer Academy's liability is limited to program fees paid. We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal injury during normal activities</li>
              <li>Lost or stolen personal property</li>
              <li>Force majeure events</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Indemnification</h2>
            <p>Participants agree to indemnify UST Soccer Academy against:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Claims arising from violation of terms</li>
              <li>Misuse of services or facilities</li>
              <li>Violation of others' rights</li>
              <li>Negligent or willful acts</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </>
  );
}

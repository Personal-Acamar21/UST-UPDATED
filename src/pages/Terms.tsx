import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use - UST Soccer Academy</title>
        <meta name="description" content="Terms of use and conditions for UST Soccer Academy services and programs." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto prose prose-lg"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the UST Soccer Academy website and services, you agree to be bound by these Terms of Use, our Privacy Policy, and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Program Registration and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration is not confirmed until full payment is received</li>
              <li>All fees must be paid according to the published payment schedule</li>
              <li>Registration fees are non-refundable unless otherwise specified</li>
              <li>Late payment fees may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Program Participation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participants must adhere to the UST Soccer Academy Code of Conduct</li>
              <li>Appropriate soccer attire and equipment is required for all sessions</li>
              <li>Parents/guardians must sign all required waivers and medical forms</li>
              <li>UST Soccer Academy reserves the right to modify program schedules</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Health and Safety</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participants must disclose any medical conditions or allergies</li>
              <li>Parents/guardians must provide emergency contact information</li>
              <li>UST Soccer Academy follows CDC and local health guidelines</li>
              <li>Staff are trained in basic first aid and emergency procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Photo and Video Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>UST Soccer Academy may photograph or video record sessions for promotional purposes</li>
              <li>Parents/guardians may opt-out of photo/video usage in writing</li>
              <li>Photos/videos will not be sold to third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content on the UST Soccer Academy website is protected by copyright</li>
              <li>UST Soccer Academy logos and branding may not be used without permission</li>
              <li>Training materials are for participant use only</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </>
  );
}

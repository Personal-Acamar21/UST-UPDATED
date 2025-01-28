import React from 'react';
import { Helmet } from 'react-helmet-async';
import Schedule from '../components/Schedule/Schedule';

export default function SchedulePage() {
  return (
    <>
      <Helmet>
        <title>Training Schedule - UST Soccer Academy</title>
        <meta name="description" content="View our comprehensive training schedule for all age groups and programs at UST Soccer Academy." />
      </Helmet>

      <Schedule showFullSchedule />
    </>
  );
}
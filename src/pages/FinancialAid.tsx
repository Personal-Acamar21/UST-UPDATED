import React from 'react';
import { Helmet } from 'react-helmet-async';
import FinancialAidHero from '../components/FinancialAid/FinancialAidHero';
import FinancialAidContent from '../components/FinancialAid/FinancialAidContent';

export default function FinancialAid() {
  return (
    <>
      <Helmet>
        <title>Financial Aid - UST Soccer Academy</title>
        <meta 
          name="description" 
          content="Explore UST Soccer Academy's financial aid options, including scholarships, grants, and sponsorship programs. Making soccer accessible for all talented players." 
        />
      </Helmet>

      <FinancialAidHero />
      <FinancialAidContent />
    </>
  );
}
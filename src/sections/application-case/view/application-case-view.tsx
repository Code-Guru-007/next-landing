'use client';

// @mui
import Box from '@mui/material/Box';
// layouts
import ApplicationCaseHero from '../application-case-hero';
import FeaturedCases from '../featured-cases';

// components

export default function ApplicationCaseView() {
  return (
    <>
      <ApplicationCaseHero />
      <FeaturedCases />
    </>
  );
}

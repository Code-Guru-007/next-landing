'use client';

// @mui
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import HomeHero from '../home-hero';
import HomeCategories from '../home-categories';
import HomeIntegration from '../home-integration';
import HomeTrial from '../home-trial';
import HomePricing from '../home-pricing';
import HomeQuestion from '../home-question';

export default function HomeView() {
  return (
    <MainLayout>
      <HomeHero />
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <HomeCategories />
        <HomeIntegration />
        <HomeTrial />
        <HomeQuestion />
        <HomePricing />
      </Box>
    </MainLayout>
  );
}

'use client';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PricingHero() {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: '#F8F9FC',
        marginTop: '66px',
      }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: { xs: '32px', md: '48px' },
          fontWeight: 700,
        }}
      >
        Infocenter 價格
      </Typography>

      <Typography
        align="center"
        sx={{
          fontSize: '20px',
          fontWeight: 400,
        }}
      >
        We are founded by a leading academic and researcher in the field of Industrial Systems
        Engineering.
        <br />
        For entrepreneurs, startups and freelancers. If you didn’t find what you needed, these could
        help!
      </Typography>
    </Box>
  );
}

import Image from 'next/image';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function ApplicationCaseHero() {
  return (
    <Box position="relative">
      <Box position="absolute" width="100%" height="100%">
        <Box sx={{ position: 'relative', height: '100%', maxHeight: '750px' }}>
          <Image
            src="/assets/images/application-case/hero.png"
            fill
            priority
            style={{ zIndex: -1 }}
            alt="Application Case Hero"
          />
        </Box>
      </Box>
      <Container
        sx={{
          textAlign: 'center',
          py: { xs: 20, sm: 30, md: 40 },
        }}
      >
        <Typography variant="h2" mb={2} sx={{ color: (theme) => theme.palette.common.white }}>
          精選案例
        </Typography>
        <Typography
          variant="h5"
          fontWeight={400}
          sx={{ color: (theme) => theme.palette.common.white }}
        >
          Featured Cases
        </Typography>
      </Container>
    </Box>
  );
}

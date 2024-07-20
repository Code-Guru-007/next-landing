import Image from 'next/image';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function ApplicationCaseDetailHero({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <Box position="relative">
      <Box position="absolute" width="100%" height="100%">
        <Box sx={{ position: 'relative', height: '100%' }}>
          <Image
            src="/assets/images/application-case/detail_hero.png"
            fill
            priority
            style={{
              objectFit: 'cover',
              zIndex: -1,
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("/assets/images/application-case/detail_hero.png") lightgray 50% / cover no-repeat',
            }}
            alt="Application Case Hero"
          />
        </Box>
      </Box>
      <Container
        sx={{
          py: { xs: 20, sm: 30, md: 40 },
        }}
      >
        <Typography variant="h2" mb={2} sx={{ color: (theme) => theme.palette.common.white }}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={400}
          sx={{ color: (theme) => theme.palette.common.white }}
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
}

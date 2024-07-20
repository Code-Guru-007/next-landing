import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel, { useCarousel } from 'src/components/carousel';
import Image from 'next/image';
import { Container, IconButton, Stack } from '@mui/material';

const StyledRoot = styled('div')(({ theme }) => ({
  width: '100%',
  height: '600px',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
  '@keyframes fade': {
    '0%': { opacity: '0' },
    '20%': { opacity: '1' },
    '80%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  '@keyframes fade1': {
    '0%': { opacity: '0' },
    '20%': { opacity: '1' },
    '80%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
}));

export default function HomeHero() {
  const items = [
    {
      title: '數據智能，創見未來',
      description:
        'InfoCenter帶您進入數據洞察的新維度。透過AI的深度學習,我們將數據轉化為行動力，驅動決策，釋放商業潛力。立刻探索，解鎖您業務的未來。',
      src: 'assets/landing/dashboard1.jpeg',
      buttonTitle: '免費體驗',
    },
    {
      title: '數據智能，創見未來',
      description:
        'InfoCenter帶您進入數據洞察的新維度。透過AI的深度學習,我們將數據轉化為行動力，驅動決策，釋放商業潛力。立刻探索，解鎖您業務的未來。',
      src: 'assets/landing/dashboard1.jpeg',
      buttonTitle: '免費體驗',
    },
  ];
  const carousel = useCarousel({});
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const hide = percent > 120;

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <Box>
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {items.map((item, key) => (
              <Box
                key={`hero-${item.title}`}
                height={600}
                position="relative"
                sx={{ bgcolor: '#00000099' }}
              >
                <Image
                  src={`/${item.src}`}
                  fill
                  alt="hero"
                  style={{ objectFit: 'cover', zIndex: -1 }}
                  quality={100}
                />
                <Container
                  maxWidth="lg"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    color: (theme) => theme.palette.common.white,
                    position: 'relative',
                  }}
                >
                  <Stack spacing={5} alignItems="flex-start">
                    <Typography variant="h2" zIndex={1}>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" zIndex={1} sx={{ fontWeight: 400, maxWidth: 600 }}>
                      {item.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href="#"
                      size="large"
                      sx={{ p: '10px 38px', fontWeight: 400 }}
                    >
                      {item.buttonTitle}
                    </Button>
                  </Stack>
                  <Box
                    display={{ xs: 'none', md: 'flex' }}
                    position="absolute"
                    right={0}
                    top="50%"
                    zIndex={2}
                    sx={{ transform: 'translateY(-50%)' }}
                  >
                    <Box
                      sx={{
                        backgroundImage: 'url(assets/landing/robot-comment.png)',
                        backgroundSize: 'cover',
                        width: '299px',
                        height: '196px',
                        transform: 'rotate(6.1deg)',
                        animation: 'fade 4s infinite',
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="text.primary"
                        sx={{
                          width: '210px',
                          marginLeft: '30px',
                          marginTop: '65px',
                          transform: 'rotate(-6.1deg)',
                          backgroundRepeat: 'no-repeat',
                          animation: 'fade1 4s infinite',
                        }}
                      >
                        探索值得信賴的人工智慧，幫助您以全新的方式與客戶建立聯繫
                      </Typography>
                    </Box>
                    <Box width={227} height={227} position="relative" mt={12}>
                      <Image src="/assets/landing/robot.gif" fill priority quality={100} alt="" />
                    </Box>
                  </Box>
                </Container>
              </Box>
            ))}
          </Carousel>
          <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
              <IconButton onClick={carousel.onPrev} size="small" sx={{ zIndex: 1, p: 0 }}>
                <Image src="/assets/icons/arrow-left.svg" width={32} height={32} alt="logo" />
              </IconButton>
              <IconButton onClick={carousel.onNext} size="small" sx={{ zIndex: 1, p: 0 }}>
                <Image src="/assets/icons/arrow-right.svg" width={32} height={32} alt="logo" />
              </IconButton>
            </Stack>
          </Container>
        </Box>
      </StyledRoot>
      <Box sx={{ height: { md: '600px' } }} />
    </>
  );
}

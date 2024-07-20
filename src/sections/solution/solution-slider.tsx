// @mui
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

const StyledRoot = styled('div')(({ theme }) => ({
  marginTop: '66px',
  '& .slider-leftcontent': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '47x',
    '& .slider-box': {
      width: '549px',

      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '57.6px',
      '& .slider-title': {
        fontSize: '48px',
        fontWeight: 700,
      },
      '& .slider-description': {
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '24px',
        marginTop: '15px',
      },
      '& .slider-button': { width: '140px', fontSize: '15px', fontWeight: 400, marginTop: '30px' },
    },
  },
  '& .slider-Image': {},
}));

export default function SolutionSlider() {
  const items = [
    {
      title: '模組名稱',
      description:
        'For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people.',
      src: 'assets/solution/slider1.png',
      buttonTitle: '免費體驗',
    },
    {
      title: '模組名稱',
      description:
        'For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people.',
      src: 'assets/solution/slider1.png',
      buttonTitle: '免費體驗',
    },
  ];
  const carousel = useCarousel({});
  return (
    <StyledRoot>
      <Grid container>
        <Grid xs={6} md={6} className="slider-leftcontent">
          <Box className="slider-box">
            <Typography className="slider-title">{items[0].title}</Typography>
            <Typography className="slider-description">{items[0].description}</Typography>
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              className="slider-button"
              variant="contained"
              sx={{ maxWidth: '130px', height: '42px', backgroundColor: '#2065D1' }}
              color="primary"
            >
              {items[0].buttonTitle}
            </Button>
          </Box>
        </Grid>
        <Grid xs={6} md={6} sx={{ height: '500px' }}>
          <Box sx={{ position: 'relative' }}>
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {items.map((item, index) => (
                <Grid key={index}>
                  <Grid container>
                    <Grid
                      sx={{
                        width: '100%',
                        height: '500px',
                        backgroundImage: `url('/assets/solution/slider1.png')`,
                        backgroundSize: 'cover',
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Carousel>

            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-49uh3p"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowCircleLeftIcon"
              style={{
                position: 'absolute',
                bottom: '48px',
                right: '153px',
                width: '32px',
                height: '32px',
                fill: 'white',
                opacity: 0.8,
              }}
              onClick={carousel.onPrev}
            >
              <path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12m10-1h4v2h-4v3l-4-4 4-4z" />
            </svg>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-49uh3p"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowCircleRightIcon"
              style={{
                position: 'absolute',
                bottom: '48px',
                right: '113px',
                width: '32px',
                height: '32px',
                fill: 'white',
                opacity: 0.8,
              }}
              onClick={carousel.onNext}
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-10 1H8v-2h4V8l4 4-4 4z" />
            </svg>
          </Box>
        </Grid>
      </Grid>
    </StyledRoot>
  );
}

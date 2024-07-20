'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// @mui
import { Box, Container, Stack, Link, Typography, Grid, Card } from '@mui/material';
// layouts

import { APPLICATION_CASES } from 'src/_mock/_application_case';
// components
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useParams } from 'src/routes/hook';
import ApplicationCaseDetailHero from '../application-case-detail-hero';
import CodeSnippet from '../codesnippet';

const codes = [
  '>$ yarn install',
  '//Or',
  '>$npm install',
  '\n',
  '//Everything installed!',
  '\n',
  '\n',
  '>$ yarn start',
  '//Or',
  '>$ npm run start',
  '\n',
  '//LiveReload started. Opening localhost:3000',
];

const tutorialSteps = [{}, {}, {}, {}];

const applicationTitles = [
  { id: 'featured-case-title-1', title: '目錄一' },
  { id: 'featured-case-title-2', title: '目錄二' },
  { id: 'featured-case-title-3', title: '目錄三' },
];

export default function ApplicationCaseDetailView() {
  const { applicationCaseId } = useParams();
  const { title, description } = APPLICATION_CASES.filter(
    (item) => item.id === applicationCaseId
  )[0];
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;
  const carouselRef = useRef<Slider | null>(null);
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => setActiveStep(newIndex),
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(step);
    }
  };

  useEffect(() => {
    const stickyCardItems = document.querySelectorAll(
      '[id^="card-item-"]'
    ) as NodeListOf<HTMLElement>;
    const titles = document.querySelectorAll(
      '[id^="featured-case-title"]'
    ) as NodeListOf<HTMLElement>;
    stickyCardItems[0].style.borderLeft = '1px solid #2065D1';

    const logScrollPosition = () => {
      const scrollPosition = window.scrollY;
      titles.forEach((ti, index) => {
        const titlePosition = ti.offsetTop;
        if (
          scrollPosition >= titlePosition - 10 &&
          scrollPosition < titlePosition + ti.offsetHeight
        ) {
          stickyCardItems.forEach((item) => {
            item.style.borderLeft = 'none';
            return false;
          });
          stickyCardItems[index].style.borderLeft = '1px solid #2065D1';
        }
      });
    };

    window.addEventListener('scroll', logScrollPosition);

    return () => {
      window.removeEventListener('scroll', logScrollPosition);
    };
  }, []);

  return (
    <>
      <ApplicationCaseDetailHero title={title} description={description} />
      <Box mt={5} mb={4}>
        <Container>
          <Stack direction="row" spacing={2}>
            <Link
              variant="body1"
              href={paths.applicationCase}
              component={RouterLink}
              underline="hover"
              sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 700 }}
            >
              白皮書
            </Link>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 700 }}
            >
              /
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              {title}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Grid container columnSpacing={3}>
          <Grid item md={8}>
            <Stack direction="column" spacing={2.5}>
              <Typography id="featured-case-title-1" variant="h4" sx={{ fontWeight: 700 }}>
                目錄一
              </Typography>
              <Typography variant="body1">
                We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna
                iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor
                imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna
                velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis
                eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus
                rhoncus laoreet.
              </Typography>
              <Typography id="featured-case-title-2" variant="h4" sx={{ fontWeight: 700 }}>
                目錄二
              </Typography>
              <Typography variant="body1">
                Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis
                et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent
                vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Image
                  src="/assets/icons/home/Check.svg"
                  width={24}
                  height={24}
                  alt="checkIcon"
                  style={{ marginRight: 16 }}
                />
                <Typography variant="body1">
                  Our sign up is dead simple. We only require your basic company information
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Image
                  src="/assets/icons/home/Check.svg"
                  width={24}
                  height={24}
                  alt="checkIcon"
                  style={{ marginRight: 16 }}
                />
                <Typography variant="body1">
                  We support bulk uploading via SQL, integrations with most data storage products
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Image
                  src="/assets/icons/home/Check.svg"
                  width={24}
                  height={24}
                  alt="checkIcon"
                  style={{ marginRight: 16 }}
                />
                <Typography variant="body1">
                  Simply select where you'd like to transfer your data
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Image
                  src="/assets/icons/home/Check.svg"
                  width={24}
                  height={24}
                  alt="checkIcon"
                  style={{ marginRight: 16 }}
                />
                <Typography variant="body1">
                  Our sign up is dead simple. We only require your basic company information
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Image
                  src="/assets/icons/home/Check.svg"
                  width={24}
                  height={24}
                  alt="checkIcon"
                  style={{ marginRight: 16 }}
                />
                <Typography variant="body1">
                  We support bulk uploading via SQL, integrations with most data storage products
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Image
                  src="/assets/icons/home/Check.svg"
                  width={24}
                  height={24}
                  alt="checkIcon"
                  style={{ marginRight: 16 }}
                />
                <Typography variant="body1">
                  Simply select where you'd like to transfer your data
                </Typography>
              </Box>
              <Stack direction="column" spacing={4}>
                <Typography id="featured-case-title-3" variant="h4" sx={{ fontWeight: 700 }}>
                  目錄三
                </Typography>
                <Typography variant="body1">
                  We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna
                  iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor
                  imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent
                  urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi
                  sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et
                  lectus rhoncus laoreet.
                </Typography>
                <CodeSnippet codes={codes} />
                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                  1. What information do we collect?
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                  2. How do we use your information?
                </Typography>
                <Typography variant="body1">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                  3. Will your information be shared with anyone?
                </Typography>
                <Typography variant="body1">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and
                  praising pain was born and I will give you a complete account of the system, and
                  expound the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                  itself, because it is pleasure, but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain of itself, because
                  it is pain, but because occasionally circumstances occur in which toil and pain
                  can procure him some great pleasure. To take a trivial example, which of us ever
                  undertakes laborious physical exercise, except to obtain some advantage from it?
                  But who has any right to find fault with a man who chooses to enjoy a pleasure
                  that has no annoying consequences, or one who avoids a pain that produces no
                  resultant pleasure?
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                  4. Do we use cookies or other tracking technologies?
                </Typography>
                <Typography variant="body1">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                  rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                  quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                  tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                  consequatur aut perferendis doloribus asperiores repellat
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} sx={{ position: 'relative' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                height: '100%',
              }}
            >
              <Card
                sx={{
                  borderRadius: 1,
                  py: 4,
                  width: '100%',
                  maxWidth: '280px',
                  position: 'sticky',
                  top: '200px',
                  height: 'fit-content',
                }}
              >
                {applicationTitles.map((item, index) => (
                  <Box
                    id={`card-item-${item.id}`}
                    key={item.id}
                    sx={{
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      pl: '20px',
                    }}
                  >
                    {item.title}
                  </Box>
                ))}
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box py={4}>
        <Container>
          <Slider ref={carouselRef} {...settings}>
            {tutorialSteps.map((step, index) => (
              <Container key={index}>
                <Grid container columnSpacing={2}>
                  <Grid item>
                    <Box sx={{ position: 'relative', height: '360px', width: '380px' }}>
                      <Image
                        src="/assets/images/application-case/slide1.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Slide"
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ position: 'relative', height: '360px', width: '380px' }}>
                      <Image
                        src="/assets/images/application-case/slide2.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Slide"
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ position: 'relative', height: '360px', width: '380px' }}>
                      <Image
                        src="/assets/images/application-case/slide3.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Slide"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            ))}
          </Slider>
        </Container>
        <Box display="flex" justifyContent="center" sx={{ mt: '32px' }}>
          {Array.from({ length: maxSteps }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                mx: '12px',
                borderRadius: '50%',
                backgroundColor: index === activeStep ? 'grey.800' : 'grey.400',
                cursor: 'pointer',
              }}
              onClick={() => handleStepChange(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

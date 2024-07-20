import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box, Container, Divider, Grid } from '@mui/material';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <>
      <Box borderBottom="1px solid rgba(0, 0, 0, 0.12)" borderTop="1px solid rgba(0, 0, 0, 0.12)">
        <Container maxWidth="lg" sx={{ py: { xs: 2.5, md: 4 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item>
              <Typography
                component={RouterLink}
                href="/"
                variant="h3"
                sx={{ color: (theme) => theme.palette.secondary.main }}
              >
                InfoCenter
              </Typography>
              <Typography variant="body1" lineHeight={2}>
                eGroupAI Inc.
                <br /> No. 47, Sec. 2, Xinhai Rd., Da’an Dist.,
                <br /> Taipei City 106, Taiwan (R.O.C.)
              </Typography>
              <Stack
                flexDirection="row"
                flexWrap="wrap"
                alignItems="flex-start"
                gap={2}
                sx={{ mt: 4 }}
              >
                <Image
                  width={184}
                  height={79}
                  quality={100}
                  priority
                  alt="beta"
                  src="/assets/images/home/footer2.png"
                />
                <Image
                  width={80}
                  height={124}
                  quality={100}
                  priority
                  alt="iso"
                  src="/assets/images/home/footer1.png"
                />
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={1.5}>
                <Typography variant="body1" fontWeight={700}>
                  AboutUs
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Vision
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Why choose eGroupAI
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  What we do
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Company development
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={1.5}>
                <Typography variant="body1" fontWeight={700}>
                  Recognize
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Feature
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Deployed
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  API
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Specification
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Senario
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Price
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={1.5}>
                <Typography variant="body1" fontWeight={700}>
                  Liveness
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Feature
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Deployed
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  API
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Specification
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Senario
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Price
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={1.5}>
                <Typography variant="body1" fontWeight={700}>
                  Liveness
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Facial Recognition
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Applications -Service
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={1.5}>
                <Typography variant="body1" fontWeight={700}>
                  Article
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Classification
                </Typography>
                <Typography variant="body1" color="text.primary" component={RouterLink} href="#">
                  Knowledge
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ py: 2.5 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            © eGroupAI. {new Date().getFullYear()}. All rights reserved
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography component={RouterLink} href="#" variant="body2" color="text.secondary">
              Privacy Policy
            </Typography>
            <Typography component={RouterLink} href="#" variant="body2" color="text.secondary">
              Cookie Policy
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

'use client';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function PricingQuestion() {
  return (
    <Box
      sx={{
        py: 12,
      }}
    >
      <Typography align="center" sx={{ fontSize: '32px', fontWeight: 700, mb: 4 }}>
        常見問題
      </Typography>
      <Container>
        <Grid container alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} sm={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              Can I purchase a gift certificate?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              What is your return policy?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              Do you sell gift cards?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              Can I change plans later on?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              Is this a subscription service?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              Can I purchase a gift certificate?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

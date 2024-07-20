'use client';

// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// routes
import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function PricingContactUs() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#F8F9FC',
      }}
    >
      <Grid container>
        <Grid item xs>
          <Typography
            align="center"
            sx={{
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            任何疑問？
          </Typography>
          <Typography
            align="center"
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2,
            }}
          >
            View message performance and test against variants and control.
          </Typography>
          <Stack alignItems="center">
            <Button
              color="inherit"
              size="small"
              target="_blank"
              rel="noopener"
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.main,
                mt: 3,
              }}
              href={paths.minimalUI}
              endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
            >
              Contact us
            </Button>
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <Typography
            align="center"
            sx={{
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            客製化方案
          </Typography>
          <Typography
            align="center"
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2,
            }}
          >
            Looking for something else? Request a Consultation to customize a plan.
          </Typography>
          <Stack alignItems="center">
            <Button
              color="inherit"
              size="small"
              target="_blank"
              rel="noopener"
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.main,
                mt: 3,
              }}
              href={paths.minimalUI}
              endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
            >
              Contact us
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

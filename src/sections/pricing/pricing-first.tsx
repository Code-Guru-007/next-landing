'use client';

import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Slider from '@mui/material/Slider';
import Iconify from 'src/components/iconify';

export default function PricingFirst() {
  const [value, setValue] = useState<number>(20);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <Container sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 5, md: 14 }, px: 10 }}>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                lineHeight: '64px',
                fontWeight: 700,
              }}
            >
              Step 1. 您的組織人數 ?
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: '32px', md: '40px' },
                fontWeight: 700,
                lineHeight: '64px',
                color: '#2065D1',
              }}
            >
              每個 $100 TWD/月
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mt: 5,
                fontWeight: 400,
              }}
            >
              theFront will make your product look modern and professional while saving you precious
              time
            </Typography>
            <Box display="flex" flexDirection="row" gap={3} sx={{ mt: 5 }}>
              <Box sx={{ width: '-webkit-fill-available', maxWidth: 400 }}>
                <Slider
                  defaultValue={value}
                  valueLabelDisplay="on"
                  onChange={handleChange}
                  min={0}
                  max={100}
                  size="medium"
                />
                <Box display="flex" flexDirection="row" gap={1}>
                  <Iconify
                    width={16}
                    icon="fluent:info-28-filled"
                    sx={{
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  >
                    請選擇您的組織人數
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
                }}
              >
                <Typography variant="subtitle2">{value}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="/assets/images/pricing/Hands_Phone.png"
            alt="home-price"
            sx={{ width: '480px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

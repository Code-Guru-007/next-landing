// @mui
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Image from 'next/image';
// ----------------------------------------------------------------------
export default function HomeIntegration() {
  const theme = useTheme();
  const planItems = [
    {
      icon: '/assets/landing/planIcon1.png',
      title1: '產能',
      title2: '提高',
      color: alpha(theme.palette.success.main, 0.8),
      percent: '30 %',
    },
    {
      icon: '/assets/landing/planIcon2.png',
      title1: '辦公效率',
      title2: '提升',
      color: alpha(theme.palette.success.main, 0.8),
      percent: '55 %',
    },
    {
      icon: '/assets/landing/planIcon3.png',
      title1: '分析資訊時間',
      title2: '加快',
      color: alpha(theme.palette.success.main, 0.8),
      percent: '70 %',
    },
    {
      icon: '/assets/landing/planIcon4.png',
      title1: '營運成本',
      title2: '降低',
      color: 'red',
      percent: '65 %',
    },
  ];
  return (
    <Container sx={{ mt: '124px' }} maxWidth="lg">
      <Typography variant="h3" textAlign="center">
        實現ESG目標,邁向永續發展之路
      </Typography>

      <Grid container spacing={2} sx={{ mt: '60px' }}>
        {planItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={item.title1}>
            <Stack spacing={3} alignItems="center">
              <Box
                width={71}
                height={71}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  borderRadius: '50%',
                  backgroundColor: alpha(theme.palette.grey[600], 0.1),
                }}
              >
                <Image width={40} height={40} alt={item.title1} src={item.icon} />
              </Box>

              <Stack direction="row" spacing={2} justifyContent="center">
                <Typography variant="h3">{item.title1}</Typography>
                <Typography variant="h3" sx={{ color: item.color }}>
                  {item.title2}
                </Typography>
              </Stack>
              <Typography variant="h2">{item.percent}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

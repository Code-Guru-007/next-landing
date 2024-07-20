import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/system';
// ----------------------------------------------------------------------
const priceItems = [
  { title: 'CRM' },
  { title: 'Activity' },
  { title: 'KM' },
  { title: 'HRM' },
  { title: 'CMS' },
  { title: 'BPM' },
];
export default function HomePricing() {
  return (
    <Grid sx={{ backgroundColor: '#F8F9FC', pt: '124px' }}>
      <Grid>
        <Typography
          sx={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', lineHeight: '38.4px' }}
        >
          隨選訂閱，靈活經營
          <br />
          無客製化費，隨心所欲加入或取消！
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 400,
            textAlign: 'center',
            lineHeight: '38.4px',
            mt: '10px',
            color: '#646E73',
          }}
        >
          我們的價格計劃靈活多變，旨在滿足您不同階段的需求。選擇合適的計劃，讓我們的服務成為您業務成長的加速器
        </Typography>
      </Grid>
      <Grid container sx={{ mt: '40px', pb: '124px', mb: '-40px' }}>
        <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: 'right' }}>
          <Paper
            sx={{
              width: '590px',
              borderRadius: '8px',
              boxShadow: '0px 3px 6px 0px #8C98A440',
            }}
          >
            <Typography sx={{ textAlign: 'center', mt: '48px' }}>月費</Typography>
            <Typography sx={{ fontSize: '60px', fontWeight: 700, mt: '20px', textAlign: 'center' }}>
              $2,500/月
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, textAlign: 'center' }}>
              彈性選擇所需要的功能，每項功能每個月僅需 $NT 2,500
            </Typography>
            <Grid container sx={{ padding: '50px' }}>
              {priceItems.map((item, index) => (
                <Grid key={index} item xs={6}>
                  <Grid sx={{ display: 'flex', mt: '15px' }}>
                    <Image src="/assets/landing/checkIcon.png" width={20} height={20} alt="" />
                    <Typography sx={{ ml: '30px' }}>{item.title}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: 'left' }}>
          <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Paper sx={{ width: '590px', backgroundColor: '#2065D1', height: '368px' }}>
              <Grid sx={{ display: 'flex', justifyContent: 'center', mt: '50px' }}>
                <Image src="/assets/landing/priceMark.png" width={67} height={67} alt="" />
              </Grid>

              <Typography
                sx={{
                  textAlign: 'center',
                  mt: '20px',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                詳細收費說明
              </Typography>
              <Grid sx={{ display: 'flex', mt: '30px', ml: '180px' }}>
                <Image src="/assets/landing/checkIcon.png" width={20} height={20} alt="" />
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: 'white',
                    ml: '15px',
                  }}
                >
                  使用者費 $100/位(月)
                </Typography>
              </Grid>
              <Grid sx={{ display: 'flex', mt: '5px', ml: '180px' }}>
                <Image src="/assets/landing/checkIcon.png" width={20} height={20} alt="" />
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: 'white',
                    ml: '15px',
                  }}
                >
                  優惠方案－非營利 50% off
                </Typography>
              </Grid>
              <Divider
                sx={{ borderColor: (theme) => alpha(theme.palette.grey[100], 0.1), mt: '40px' }}
              />
              <Typography sx={{ textAlign: 'center', color: 'white', mt: '20px' }}>
                價格說明
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

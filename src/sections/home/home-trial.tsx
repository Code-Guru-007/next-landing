// @mui
import { Box, Grid, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { paths } from 'src/routes/paths';
// ----------------------------------------------------------------------
const data = [
  {
    title: '輕鬆蒐集營運資料',
    descriptions:
      'InfoCenter 系統的高彈性設計，不論你是哪種工作類型，都能自訂最符合您需求的資料欄位，輕鬆處儲存各種資訊',
    src: '/assets/landing/trailImage1.gif',
  },
  {
    title: '即時掌握營運數據',
    descriptions:
      ' InfoCenter 儀表板整合了所有重要資訊，讓您能隨時掌握最新的重要資訊，以幫助您在工作上的所有決策',
    src: '/assets/landing/trailImage2.gif',
  },
  {
    title: '專屬的智能AI專家',
    descriptions:
      'InfoCenter 與未來趨勢結合，打造專屬智能 AI 助手，組織內所有資訊都在 AI 的大腦裡，以幫助我們提高工作效率',
    src: '/assets/landing/trailImage3.gif',
  },
];
export default function HomeTrial() {
  return (
    <>
      <Box
        sx={{
          mt: 20,
          backgroundImage: 'url(/assets/landing/trailbackground.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: 18.5,
          }}
        >
          <Typography variant="h3" mb={2} sx={{ color: (theme) => theme.palette.common.white }}>
            打造屬於你的營運系統
          </Typography>
          <Typography
            variant="h5"
            mb={4}
            fontWeight={400}
            sx={{ color: (theme) => theme.palette.grey[300] }}
          >
            InfoCenter 是您在業務、資料管理的最佳夥伴，在我們的協助下，
            <br /> 不論是要整合 CRM、行銷、活動、知識、人事資源等，都能輕鬆完成！
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={paths.pricing}
            sx={{
              minWidth: '130px',
              height: '42px',
              fontWeight: 400,
              fontSize: 15,
            }}
          >
            免費體驗
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 15 }} id="home-trial">
        <Stack spacing={10}>
          <Grid container>
            <Grid item xs={12} md={7} alignSelf="center">
              <Typography variant="h3">{data[0].title}</Typography>
              <Typography
                variant="h5"
                fontWeight={400}
                sx={{
                  color: (theme) => theme.palette.grey[600],
                  mt: '20px',
                }}
              >
                {data[0].descriptions}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} display="flex" justifyContent="flex-end">
              <Image src={data[0].src} width={500} height={275} alt={data[0].title} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={5} display="flex" justifyContent="flex-start">
              <Image src={data[1].src} width={431} height={424} alt={data[1].title} />
            </Grid>
            <Grid item xs={12} md={7} alignSelf="center">
              <Typography variant="h3">{data[1].title}</Typography>
              <Typography
                variant="h5"
                fontWeight={400}
                sx={{
                  color: (theme) => theme.palette.grey[600],
                  mt: '20px',
                }}
              >
                {data[1].descriptions}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={7} alignSelf="center">
              <Typography variant="h3">{data[2].title}</Typography>
              <Typography
                variant="h5"
                fontWeight={400}
                sx={{
                  color: (theme) => theme.palette.grey[600],
                  mt: '20px',
                }}
              >
                {data[2].descriptions}
              </Typography>
            </Grid>
            <Grid xs={12} md={5} display="flex" justifyContent="flex-end">
              <Image src={data[2].src} width={325} height={306} alt={data[2].title} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

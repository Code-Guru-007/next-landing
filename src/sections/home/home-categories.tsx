import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import { MotionViewport, varFade } from 'src/components/animate';
import { CardContent, Grid, Link } from '@mui/material';
import { RouterLink } from 'src/routes/components';

const itemData = [
  {
    img: '/assets/landing/Icon1.svg',
    title: 'CRM',
    color: '#FF5722',
    text: '提供全面的客戶管理功能。再透過精確分析，助您提升客戶滿意度與忠誠度',
    comingSoon: false,
  },
  {
    img: '/assets/landing/Icon2.svg',
    title: 'KM',
    color: '#F9B934',
    text: '有效保存並管理組織重要資產，確實掌握人才培訓與教育訓練的進度與目標',
    comingSoon: false,
  },
  {
    img: '/assets/landing/Icon3.svg',
    color: '#2065D1',
    title: 'CMS',
    text: '以往網站更新內容費時費力，CMS 幫您輕鬆管理、打造專屬網站',
    comingSoon: false,
  },
  {
    img: '/assets/landing/Icon4.svg',
    title: 'MICE',
    color: '#00A76F',
    text: '全面的活動管理系統，不論是活動前、中、後皆一手掌握',
    comingSoon: true,
  },
  {
    img: '/assets/landing/Icon5.svg',
    title: 'HRM',
    color: '#3F51B5',
    text: '精確的權限與薪資功能，清楚管理組織與人事支出',
    comingSoon: true,
  },
  {
    img: '/assets/landing/Icon6.svg',
    title: 'BPM',
    color: '#9C27B0',
    text: '建立工作流程，以最佳化進度追蹤與互動',
    comingSoon: true,
  },
];
export default function HomeCategories() {
  return (
    <Box
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        backgroundImage: `url('assets/landing/background2.png')`,
        backgroundSize: '100% 100%',
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="h3">全方位功能，打造業務卓越</Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h5" fontWeight={400} color="text.secondary">
              從客戶關係管理到企業資源規劃,InfoCenter
              提供一站式的全方位功能，滿足您的每一項業務需求。
              <br />
              我們的解決方案簡單易用，卻功能強大，讓您的業務更加智能
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={3}>
          {itemData.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.title}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box
                      bgcolor={alpha(item.color, 0.1)}
                      p="18px"
                      display="flex"
                      width="fit-content"
                      borderRadius={2}
                    >
                      <Image src={item.img} width={24} height={24} quality={100} alt={item.text} />
                    </Box>
                    {item.comingSoon && (
                      <Box
                        sx={{
                          borderRadius: 0.5,
                          bgcolor: '#F9B934',
                          width: 54,
                          height: 32,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="caption" sx={{ lineHeight: 1 }}>
                          即將推出
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                  <Typography variant="h5" mb={2}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    {item.text}
                  </Typography>
                  <Stack justifyContent="flex-end" alignItems="flex-end">
                    <Link
                      component={RouterLink}
                      href="#"
                      color="primary"
                      fontSize={14}
                      sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                    >
                      服務介紹
                      <Image
                        src="/assets/icons/long-arrow.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Iconify from 'src/components/iconify';

type Props = {
  handleOpen: () => void;
};
const StyledRoot = styled('div')(({ theme }) => ({
  '& .title-header': {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 700,
  },
  '& .title-header-sm': {
    textAlign: 'center',
    fontSize: '40px',
    color: '#2065D1',
    fontWeight: 700,
  },
  '& .title-description': {
    fontSize: '20px',
    fontWeight: 400,
    textAlign: 'center',
    marginTop: '20px',
    color: theme.palette.grey[400],
  },
  '& .body': {
    display: 'flex',
    justifyContent: 'center',
    '& .body-container': {
      margin: '8px',
      maxWidth: '889px',
      '& .card': {
        borderRadius: '8px',
        boxShadow: '0px 3px 6px 0px #8C98A440',
        '& .card-body': {
          margin: '25px',
          '& .card-content': {
            display: 'flex',
            '& .card-avatar': {
              borderRadius: '16px',
              paddingLeft: '18px',
              paddingTop: '16px',
              width: '60px',
              height: '60px',
            },
            '& .card-warning': {
              backgroundColor: alpha(theme.palette.warning.light, 0.9),
              borderRadius: '4px',
              marginTop: '6px',
              height: '32px',
              marginLeft: '50px',
              padding: '8px',
              '& .warning-text': {
                margin: '0px',
                textAlign: 'center',
                fontWeight: 400,
                fontSize: '12px',
              },
            },
          },

          '& .card-title': {
            display: 'flex',
            height: '48px',
            '& .checkbox': { marginTop: '8px' },
            '& .text': {
              textAlign: 'left',
              fontSize: '20px',
              lineHeight: '24px',
              margin: '16px',
              fontWeight: 700,
              float: 'left',
            },
          },
        },
        '& .card-description': {
          margin: '20px',
          marginBottom: '0px',
          '& .content': {
            minHeight: '57px',
            fontSize: '16px',
            margin: '10px',
            color: '#646E73',
            fontWeight: 400,
            textAlign: 'left',
            lineHeight: '19.2px',
          },
        },
        '& .button-go': {
          float: 'right',
          margin: '20px',
          marginTop: '1px',
          color: '#2065D1',
          fontSize: '16px',
        },
      },
    },
  },
}));

export default function PricingSecond({ handleOpen }: Props) {
  const theme = useTheme();
  const itemData = [
    {
      img: '/assets/landing/Icon1.svg',
      title: 'CRM',
      color: alpha(theme.palette.error.main, 0.1),
      text: '客戶關係在此一手掌握 -  整合客戶資料，精準銷售與服務',
      is_allow: 1,
    },
    {
      img: '/assets/landing/Icon2.svg',
      title: 'KM',
      color: alpha(theme.palette.warning.lighter, 0.4),
      text: '知識共享從未如此簡單 — 輕鬆管理文檔，促進團隊合作',
      is_allow: 1,
    },
    {
      img: '/assets/landing/Icon3.svg',
      color: alpha(theme.palette.primary.lighter, 0.5),
      title: 'CMS',
      text: '內容管理，有效率 — 創建、發布內容，提高網站吸引力',
      is_allow: 1,
    },
    {
      img: '/assets/landing/Icon4.svg',
      title: 'MICE',
      color: alpha(theme.palette.info.light, 0.2),
      text: '活動籌劃，盡在掌控 — 從計劃到執行，每一步都輕鬆管理',
      is_allow: 0,
    },
    {
      img: '/assets/landing/Icon5.svg',
      title: 'HRM',
      color: alpha(theme.palette.primary.dark, 0.1),
      text: '人力資源，最大化利用 — 招募、培訓、評估，全員發展',
      is_allow: 0,
    },
    {
      img: '/assets/landing/Icon6.svg',
      title: 'BPM',
      color: alpha(theme.palette.secondary.dark, 0.2),
      text: '流程優化，業務飛躍 — 自動化流程，提升工作效率',
      is_allow: 0,
    },
  ];
  return (
    <StyledRoot>
      <Container>
        <Typography className="title-header">Step 2. 啟用功能</Typography>
        <Typography className="title-header-sm">每項 $2,500 TWD/月</Typography>

        <Typography className="title-description">可隨時啟用和停用！</Typography>
        <Container className="body">
          <Grid container spacing={2} className="body-container">
            {itemData.map((item) => (
              <Grid item key={item.img} gap={10} xs={12} sm={6} md={4}>
                <Card className="card">
                  <Grid className="card-body">
                    <Grid className="card-content">
                      <Grid
                        className="card-avatar"
                        sx={{
                          backgroundColor: `${item.color}`,
                        }}
                      >
                        <Image src={item.img} width={22} height={22} alt="" />
                      </Grid>

                      <Box sx={{ flexGrow: 1 }} />
                      {!item.is_allow && (
                        <Grid className="card-warning">
                          <Typography className="warning-text">即將推出</Typography>
                        </Grid>
                      )}
                    </Grid>
                    <Grid className="card-title">
                      <Checkbox size="medium" className="checkbox" />
                      <Typography className="text">{item.title}</Typography>
                    </Grid>
                  </Grid>
                  <Grid className="card-description">
                    <Typography className="content">{item.text}</Typography>
                  </Grid>
                  <Button
                    className="button-go"
                    endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
                  >
                    服務介紹
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </StyledRoot>
  );
}

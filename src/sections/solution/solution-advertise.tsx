import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import { fontFamily } from '@mui/system';

const StyledRoot = styled('div')(({ theme }) => ({
  marginTop: '30px',
  '& .header': {
    background:
      'linear-gradient(90deg, #2065D1 0%, #7FA6E3 48.42%, #EDF1F7 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));',
    height: '342px',
    display: 'flex',
    overflow: 'visible',
    '& .image-grid': {
      position: 'relative',
      '& .image1': {
        position: 'absolute',
        right: '170px',
        top: '80px',
      },
      '& .image2': {
        position: 'absolute',
        right: '340px',
        top: '140px',
        zIndex: 100,
      },
    },
    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .title': { fontSize: '32px', fontWeight: 700 },
      '& .content': { fontSize: '20px', fontWeight: 400, marginTop: '20px' },
      '& .button': { width: '166px', marginTop: '30px' },
    },
  },
  '& .body': {
    margin: '80px',
    display: 'flex',
    flexDirection: 'column',
    '& .item-box': {
      margin: 'auto',
      marginTop: '20px',
      display: 'flex',
      height: '300px',
      maxWidth: '1154px',
      '& .content': {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '40px',
        '& .title': {
          fontSize: '20px',
          fontWeight: 700,
        },
        '& .description': {
          marginTop: '12px',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '23px',
        },
      },
    },
    '& div:nth-child(odd)': {
      flexDirection: 'row-reverse',
      '& .content': { paddingRight: '40px' },
    },
    '& div:nth-child(even)': {
      '& .content': { paddingLeft: '140px' },
    },
  },
  '& .footer': {
    margin: 'auto',
    maxWidth: '1208px',
    marginTop: '104px',
    display: 'flex',
    '& .image': { borderRadius: '8px' },
    '& .content': {
      flexGrow: 1,
      '& .inner-content': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '30px',
        marginTop: '80px',
        '& .title': { fontSize: '32px', fontWeight: 700 },
        '& .content': {
          fontSize: '20px',
          fontWeight: 400,
          marginTop: '30px',
        },
        '& .item-box': {
          '& .title': {
            marginTop: '40px',
            fontSize: '48px',
            fontWeight: 700,
          },
          '& .content': {
            fontSize: '16px',
            fontWeight: 400,
            marginTop: '10px',
          },
        },
      },
    },
  },
  '& .bottom': {
    background: 'linear-gradient(90deg, #EDF1F7 0%, #7FA6E3 51.58%, #2065D1 100%);',
    height: '342px',
    marginTop: '100px',
    marginBottom: '100px',
    display: 'flex',
    overflow: 'visible',
    '& .content': {
      display: 'flex',
      justifyContent: 'center',
      '& .body': {
        maxWidth: '600px',
        '& .title': { fontSize: '32px', fontWeight: 700 },
        '& .description': {
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '24px',
          marginTop: '15px',
        },
        '& .button': { width: '166px', marginTop: '30px', backgroundColor: '##2065D1' },
      },
    },
    '& .image-content': {
      display: 'flex',
      justifyContent: 'center',
      '& .image': {
        zIndex: '100',
        marginTop: '50px',
      },
    },
  },
}));

// ----------------------------------------------------------------------
const items = [
  {
    src: '/assets/solution/temp1.png',
    title: '主要功能A',
    content:
      'Monetize your website and manage all guest interactions with your own brand, logo and domains.',
  },
  {
    src: '/assets/solution/temp2.png',
    title: '主要功能B',
    content:
      'Introduce your brand-new mobile friendly website to your customers. Seamlessly integrates with WiFi hardware and marketing automation software.',
  },
  {
    src: '/assets/solution/temp3.png',
    title: '主要功能C',
    content:
      'Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics.',
  },
];
const confirm_items = [
  {
    title: '300+',
    content: '300 + component compositions, which will help you to build any page easily.',
  },
  {
    title: '45+',
    content: '45 + landing and supported pages to Build a professional website.',
  },
  {
    title: '99%',
    content: '99% of our customers rated 5-star our themes over 5 years.',
  },
];
export default function SolutionAdvertise() {
  return (
    <StyledRoot>
      <Grid className="header">
        <Grid container spacing={2}>
          <Grid xs={6} item className="image-grid">
            <Image
              src="/assets/solution/advertise1.png"
              alt=""
              width={286}
              height={224}
              className="image1"
            />
            <Image
              src="/assets/solution/advertise2.png"
              alt=""
              width={251}
              height={267}
              className="image2"
            />
          </Grid>
          <Grid xs={6} item className="content">
            <Typography className="title">透過 InfoCenter ，引領您成為時代先驅</Typography>
            <Typography className="content">
              全面試用 InfoCenter,體驗無縫的數據管理與協作工具，助您迅速成為行業佼佼者。
            </Typography>
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              className="button"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#2065D1', height: 42 }}
            >
              免費體驗
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="body">
        {items.map((item, index) => (
          <Grid key={index} className="item-box">
            <Grid>
              <Image width={468} height={300} src={item.src} alt="" className="image" />
            </Grid>

            <Grid className="content">
              <Typography className="title">{item.title}</Typography>
              <Typography className="description" color="text.secondary">
                {item.content}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid className="footer">
        <Grid>
          <Image
            src="/assets/solution/confirm.png"
            width={586}
            height={502}
            alt=""
            className="image"
          />
        </Grid>
        <Grid className="content">
          <Grid className="inner-content">
            <Grid>
              <Typography className="title">見證 InfoCenter 帶來的威力</Typography>
              <Typography className="content" color="text.secondary">
                theFront styles and extends Material-UI components, but also included brand new
                landing page focused components.
              </Typography>
              <Grid container spacing={2} className="item-box">
                {confirm_items.map((item) => (
                  <Grid xs={12} md={4} item>
                    <Typography className="title">{item.title}</Typography>
                    <Typography className="content">{item.content}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="bottom" container>
        <Grid xs={6} className="content">
          <Grid className="body">
            <Typography className="title">透過 InfoCenter ，引領您成為時代先驅</Typography>
            <Typography className="description">
              全面試用 InfoCenter,體驗無縫的數據管理與協作工具，助您迅速成為行業佼佼者。
            </Typography>

            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              className="button"
              variant="contained"
              color="primary"
              sx={{ height: 42, backgroundColor: '#2065D1' }}
            >
              免費體驗
            </Button>
          </Grid>
        </Grid>
        <Grid xs={6} className="image-content">
          <Image
            src="/assets/solution/bottom.png"
            width={414}
            height={390}
            alt=""
            className="image"
          />
        </Grid>
      </Grid>
    </StyledRoot>
  );
}

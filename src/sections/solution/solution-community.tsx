import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';

const StyledRoot = styled('div')(({ theme }) => ({
  margin: '104px',
  '& .grid-header': {
    display: 'flex',
    '& .description': {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .title': {
        fontSize: '32px',
        fontWeight: 700,
        color: '#2D3748',
      },
      '& .content': {
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '30px',
        color: '#646E73',
        margin: '20px 123px 0px 0px',
      },
    },
  },
  '& .grid-body': {
    marginTop: '48px',
    '& .title': { fontSize: '24px', fontWeight: 700, lineHeight: '28.8px', color: '#2D3748' },
    '& .content': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '29px',
      marginTop: '10px',
      color: '#646E73',
    },
  },
}));

const items = [
  {
    title: 'Coworking communities',
    content:
      'Connect in spaces designed to bring incredible people together. Learn with them and take your proje',
  },
  {
    title: 'Coworking communities',
    content:
      'Connect in spaces designed to bring incredible people together. Learn with them and take your proje',
  },
  {
    title: 'Coworking communities',
    content:
      'Connect in spaces designed to bring incredible people together. Learn with them and take your proje',
  },
  {
    title: 'Coworking communities',
    content:
      'Connect in spaces designed to bring incredible people together. Learn with them and take your proje',
  },
];
export default function SolutionCommunity() {
  return (
    <StyledRoot>
      <Grid className="grid-header">
        <Grid className="description">
          <Typography className="title">您是否苦惱這些問題難以解決？</Typography>
          <Typography className="content">
            Three products that can be used independently or combined together for your company’s
            needs.
            <br /> Don`t listen to what they say go and see.
            <br /> Join the biggest community of people.
          </Typography>
        </Grid>
        <Image src="/assets/solution/community.png" alt="" width={490} height={444} />
      </Grid>
      <Grid className="grid-body">
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid xs={6} md={3} item>
              <Typography className="title">{item.title}</Typography>
              <Typography className="content">{item.content}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </StyledRoot>
  );
}

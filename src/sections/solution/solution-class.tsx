import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#F8F9FC',
  display: 'flex',
  justifyContent: 'center',
  '& .main-panel': {
    maxWidth: '1366px',
    margin: '142px 83px',
    '& .div-title': {
      display: 'center',
      justifyContent: 'center',
      '& .panel-title': {
        fontSize: '32px',
        fontWeight: 700,
      },
    },

    '& .div-items': {
      marginTop: '27px',
      alignItems: 'center',
      '& .item-panel': {
        width: '280px',
        height: '270px',
        borderRadius: '8px',
        border: '1px solid #0000001A',
        '& .grid-avatar': {
          width: '50px',
          height: '50px',
          margin: '32px 0px 0px 32px',
          borderRadius: '50%',
          backgroundColor: '#2065D1',
          paddingTop: '12px',
          paddingLeft: '12px',
        },
        '& .grid-scale': {
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '38.4px',
          margin: '10px 0px 0px 32px',
          color: '#2065D1',
        },
        '& .grid-title': {
          fontSize: '20px',
          fontWeight: 400,
          color: '#2D3748',
          margin: '10px 0px 0px 32px',
        },
        '& .grid-description': {
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '19.2px',
          color: '#646E73',
          margin: '10px 0px 0px 32px',
        },
      },
    },
  },
}));

const items = [
  {
    avatar: '/assets/solution/classAvatar1.png',
    scale: '1000+',
    title: 'Themeable',
    description: 'Choose from over 1000+ online video courses',
  },
  {
    avatar: '/assets/solution/classAvatar2.png',
    scale: '800+',
    title: 'Expert Instructors',
    description: 'Choose from over 1000+ online video courses',
  },
  {
    avatar: '/assets/solution/classAvatar3.png',
    scale: '100K+',
    title: 'Active Students',
    description: '100K+ active students arround the world.',
  },
  {
    avatar: '/assets/solution/classAvatar4.png',
    scale: '400+',
    title: 'Free Resources',
    description: 'Free resources for all students arround the world.',
  },
];
export default function SolutionClass() {
  return (
    <StyledRoot>
      <Grid className="main-panel">
        <Grid className="div-title">
          <Typography className="panel-title">Our global class is open for all</Typography>
        </Grid>
        <Grid className="div-items" container spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item xs={6} lg={3}>
              <Grid className="item-panel">
                <Grid className="grid-avatar">
                  <Image src={item.avatar} width={24} height={24} alt="" />
                </Grid>

                <Typography className="grid-scale">{item.scale}</Typography>
                <Typography className="grid-title">{item.title}</Typography>
                <Typography className="grid-description">{item.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </StyledRoot>
  );
}

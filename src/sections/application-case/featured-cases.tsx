import { Box, Stack, ButtonBase, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Image from 'next/image';
import Card from '@mui/material/Card';

import { useRouter } from 'src/routes/hook';

import { APPLICATION_CASES } from 'src/_mock/_application_case';

function CustomCard({
  id,
  featuredImage,
  title,
  description,
}: Readonly<{
  id: string;
  featuredImage: string;
  title: string;
  description: string;
}>) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/application-case/${id}`);
  };
  return (
    <ButtonBase onClick={handleClick}>
      <Card sx={{ borderRadius: 1 }}>
        <CardActionArea>
          <Box sx={{ position: 'relative', height: '230px' }}>
            <Image src={featuredImage} fill alt="featured Image" priority quality={100} />
          </Box>
          <Stack p={4} spacing={2}>
            <Typography variant="h5" fontWeight={400}>
              {title}
            </Typography>
            <Typography variant="body1" fontWeight={400} color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
    </ButtonBase>
  );
}
export default function FeaturedCases() {
  return (
    <Box bgcolor={(theme) => theme.palette.common.white}>
      <Container maxWidth="lg" sx={{ py: { xs: 15, md: 18 } }}>
        <Grid container columnSpacing={4} rowSpacing={8}>
          {APPLICATION_CASES.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <CustomCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

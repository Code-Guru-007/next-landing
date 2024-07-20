// @mui
import { useTheme } from '@mui/material/styles';
import { usePathname } from 'src/routes/hook';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import NavSetLang from './nav/desktop/nva-set-lang';
//
import { HeaderShadow } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname !== '/';
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP) || isHome;
  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
            boxShadow: '0px 3px 6px 0px #8C98A440',
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }} maxWidth="lg">
          <Logo offsetTop={offsetTop} />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <NavSetLang offsetTop={offsetTop} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              href={paths.pricing}
              sx={{
                minWidth: '136px',
                height: '42px',
                fontWeight: 400,
              }}
            >
              免費體驗
            </Button>
          </Stack>

          {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}

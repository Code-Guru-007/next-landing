'use client';

// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hook';
//
import Footer from './footer';
import Header from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Readonly<Props>) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {}),
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

import { forwardRef } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
import Image from 'next/image';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  offsetTop?: boolean;
}
const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, offsetTop, sx, ...other }, ref) => {
    const logo = (
      <Box sx={{ display: 'flex' }}>
        {offsetTop && (
          <Image src="/logo/header-logo-blue.png" alt="" width={117} height={30} quality={100} />
        )}
        {!offsetTop && (
          <Image src="/logo/header-logo-white.png" alt="" width={117} height={30} quality={100} />
        )}
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;

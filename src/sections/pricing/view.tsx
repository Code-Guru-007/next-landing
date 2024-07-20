'use client';

import { useState } from 'react';

// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';

import PricingHero from './pricing-hero';
import PricingFirst from './pricing-first';
import PricingSecond from './pricing-second';
import PricingThird from './pricing-third';
import PricingDiscount from './pricing-discount';
import CartDialog from './cart-dialog';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.common.white,
    top: 5,
    left: 10,
    zIndex: 9999,
  },
}));

export default function PricingView() {
  const dialog = useBoolean();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        minHeight: 1,
      }}
    >
      <PricingHero />
      <PricingFirst />
      <PricingSecond handleOpen={dialog.onTrue} />
      <PricingThird />
      <PricingDiscount />
      <StyledBadge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        badgeContent={`$${4200}`}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 999,
        }}
        onClick={handleOpen}
      >
        <Fab
          sx={{
            backgroundColor: (theme) => theme.palette.common.white,
            boxShadow: '0px 0px 2px 0px #919EAB3D, -20px 20px 40px -4px #919EAB3D',
          }}
        >
          <Iconify
            width={24}
            icon="mdi:cart-outline"
            sx={{
              color: (theme) => theme.palette.common.black,
            }}
          />
        </Fab>
      </StyledBadge>
      <CartDialog open={open} />
      <Dialog open={dialog.value} maxWidth="sm" onClose={dialog.onFalse}>
        <DialogTitle sx={{ fontSize: '18px', fontWeight: 700 }}>Infocenter 系統功能</DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            網站模組
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box sx={{ my: 3 }}>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/home/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>All features</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/home/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>Email support</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/home/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>Tech support</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/home/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>Integration ready</Typography>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

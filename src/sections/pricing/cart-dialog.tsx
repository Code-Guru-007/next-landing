'use client';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
// routes
import { paths } from 'src/routes/paths';

type Props = {
  open: boolean;
};

export default function CartDialog({ open }: Props) {
  return (
    <Box
      sx={{
        display: `${open ? 'block' : 'none'}`,
        position: 'fixed',
        bottom: '20px',
        right: '10%',
        px: 2,
        py: 3,
        boxShadow: '0px 6px 24px 0px #8C98A521',
        borderRadius: '12px',
        minWidth: '342px',
        backgroundColor: (theme) => theme.palette.common.white,
        zIndex: 999,
      }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: 700,
          mb: 3,
        }}
      >
        付費方案
      </Typography>
      <Box sx={{ backgroundColor: '#F8F9FC', borderRadius: '8px', px: 3, py: 1, mb: 1 }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          帳號數量
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          20 個 * $100 TWD/月
        </Typography>
        <Typography
          align="right"
          sx={{
            mt: 1,
            fontSize: '14px',
            fontWeight: 600,
            color: (theme) => theme.palette.grey[900],
          }}
        >
          NT$ 2,000
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#F8F9FC', borderRadius: '8px', px: 3, py: 1, mb: 1 }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          功能選擇
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          2 項功能 * $ 2500 TWD/月
        </Typography>
        <Typography
          align="right"
          sx={{
            mt: 1,
            fontSize: '14px',
            fontWeight: 600,
            color: (theme) => theme.palette.grey[900],
          }}
        >
          NT$ 5,000
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#F8F9FC', borderRadius: '8px', px: 3, py: 1, mb: 1 }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          付費方案
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          1 年繳 20% off
        </Typography>
        <Typography
          align="right"
          sx={{
            mt: 1,
            fontSize: '14px',
            fontWeight: 600,
            color: (theme) => theme.palette.success.main,
          }}
        >
          - NT$ 1,400
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#F8F9FC', borderRadius: '8px', px: 3, py: 1, mb: 1 }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          非營利機構
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          1 年繳 50% off
        </Typography>
        <Typography
          align="right"
          sx={{
            mt: 1,
            fontSize: '14px',
            fontWeight: 600,
            color: (theme) => theme.palette.success.main,
          }}
        >
          - NT$ 1,400
        </Typography>
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Box sx={{ px: 3, py: 1 }}>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
          <Box display="flex" gap={2} alignItems="center">
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              總金額
            </Typography>
            <Iconify
              width={16}
              icon="fluent:info-28-filled"
              sx={{
                color: '#BDBDBD',
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              color: (theme) => theme.palette.grey[900],
            }}
          >
            NT$ 4,200
          </Typography>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          已含 稅金 5%, 服務費 10%
        </Typography>
      </Box>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ mt: 3, px: 2 }}
      >
        <Button
          size="large"
          target="_blank"
          rel="noopener"
          variant="contained"
          sx={{
            minWidth: 130,
            fontSize: '15px',
            width: '100%',
            fontWeight: 400,
            backgroundColor: '#2065D1',
          }}
          href={paths.pricing}
        >
          免費體驗
        </Button>
      </Stack>
    </Box>
  );
}

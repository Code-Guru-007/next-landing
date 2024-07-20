import Image from 'next/image';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function CodeSnippet({
  codes,
}: Readonly<{
  codes: string[];
}>) {
  return (
    <Box
      sx={{
        maxWidth: '568px',
        py: 4,
        px: 3,
        backgroundColor: '#21325B',
        color: (theme) => theme.palette.common.white,
        borderRadius: 1,
      }}
    >
      {codes.map((code, index) => {
        if (code.startsWith('//'))
          return (
            <Typography key={index} sx={{ opacity: 0.7, color: '#6ba355', fontStyle: 'italic' }}>
              {code}
            </Typography>
          );
        if (code === '\n') return <br key={index} />;
        return (
          <Typography key={index} sx={{ opacity: 0.7 }}>
            {code}
          </Typography>
        );
      })}
    </Box>
  );
}

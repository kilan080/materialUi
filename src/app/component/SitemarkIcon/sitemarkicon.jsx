import * as React from 'react';
import Box from '@mui/material/Box';

export default function SitemarkIcon() {
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'primary.main',
        mr: 2,
        cursor: 'pointer',
      }}
    >
      DUO
    </Box>
  );
}
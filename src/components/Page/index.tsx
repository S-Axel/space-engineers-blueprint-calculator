import { Box } from '@mui/material';
import { ReactNode } from 'react';

const Page = ({ children }: {
  children: ReactNode;
}) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Box>
);

export default Page;

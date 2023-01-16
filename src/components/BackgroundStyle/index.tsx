import { Box } from '@mui/material';

const BackgroundStyle = () => (
  <Box
    sx={{
      position: 'absolute',
      width: '100%',
      height: '320px',
      top: '-50px',
      left: 0,
      backgroundColor: 'primary.main',
      opacity: 1,
      borderRadius: '0 0 20% 0',
    }}
  />
);

export default BackgroundStyle;

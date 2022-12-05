import { Box } from '@mui/material';

const BackgroundStyle = () => (
  <Box
    sx={{
      position: 'absolute',
      width: '110vw',
      height: '320px',
      top: '-50px',
      left: '-20px',
      backgroundColor: 'primary.main',
      opacity: 1,
      rotate: '-1deg',
      borderRadius: '0 0 50% 0',
    }}
  />
);

export default BackgroundStyle;

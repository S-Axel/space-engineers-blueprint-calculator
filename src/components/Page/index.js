import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Page = ({ children }) => (
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

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

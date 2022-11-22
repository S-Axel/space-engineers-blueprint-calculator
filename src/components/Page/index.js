import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Page = ({ children }) => (
  <Box component="section" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    {children}
  </Box>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

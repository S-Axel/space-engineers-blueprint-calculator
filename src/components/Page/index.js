import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Page = ({ children, sx }) => (
  <Box component="section" sx={{ ...sx, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    {children}
  </Box>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};

Page.defaultProps = {
  sx: {},
};

export default Page;

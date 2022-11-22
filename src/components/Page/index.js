import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Page = ({ children }) => (
  <Box component="section">
    {children}
  </Box>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
};

export default Page;

import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const PageBody = ({ children }) => (
  <Box sx={{ flexGrow: 1, padding: '24px' }}>
    {children}
  </Box>
);

PageBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBody;

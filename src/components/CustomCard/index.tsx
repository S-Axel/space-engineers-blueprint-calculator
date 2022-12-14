import { Card } from '@mui/material';
import PropTypes from 'prop-types';

const CustomCard = ({ children, sx, ...props }) => (
  <Card variant="outlined" sx={{ ...sx }} {...props}>
    {children}
  </Card>
);

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

CustomCard.defaultProps = {
  sx: {},
};

export default CustomCard;

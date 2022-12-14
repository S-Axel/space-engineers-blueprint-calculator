import { CardHeader } from '@mui/material';
import PropTypes from 'prop-types';

const CustomCardHeader = ({ sx, titleTypographyProps, ...props }) => (
  <CardHeader
    sx={{ ...sx }}
    titleTypographyProps={{ ...titleTypographyProps, variant: 'h6' }}
    {...props}
  />
);

CustomCardHeader.propTypes = {
  sx: PropTypes.object,
  titleTypographyProps: PropTypes.object,
};

CustomCardHeader.defaultProps = {
  sx: {},
  titleTypographyProps: {},
};

export default CustomCardHeader;

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
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  titleTypographyProps: PropTypes.object,
};

CustomCardHeader.defaultProps = {
  sx: {},
  titleTypographyProps: {},
};

export default CustomCardHeader;

import { CardHeader, CardHeaderProps } from '@mui/material';

/**
 * Custom CardHeader component
 * Be careful, the component inherits MUI problems:
 * types are wrong for CardHeader.titleTypographyProps.component
 * @constructor
 */
const CustomCardHeader = ({ ...cardHeaderProps }: CardHeaderProps) => (
  <CardHeader
    titleTypographyProps={{ variant: 'h6', ...cardHeaderProps.titleTypographyProps }}
    {...cardHeaderProps}
  />
);

export default CustomCardHeader;

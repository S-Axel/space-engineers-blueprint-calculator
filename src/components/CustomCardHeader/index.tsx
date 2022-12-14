import { CardHeader, CardHeaderProps } from '@mui/material';

/**
 * Custom CardHeader component
 * Be careful, the component inherits MUI problems:
 * types are wrong for CardHeader.titleTypographyProps.component
 * @param {CardHeaderProps} props
 * @return {JSX.Element}
 * @constructor
 */
const CustomCardHeader = ({ ...cardHeaderProps }: CardHeaderProps) => (
  <CardHeader
    titleTypographyProps={{ variant: 'h6', ...cardHeaderProps.titleTypographyProps }}
    {...cardHeaderProps}
  />
);

export default CustomCardHeader;

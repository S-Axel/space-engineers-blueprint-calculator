import { Card, CardProps } from '@mui/material';

/**
 * Custom Card component
 * @param {CardProps} props
 * @return {JSX.Element}
 * @constructor
 */
const CustomCard = ({ ...cardProps }: CardProps) => (
  <Card variant="outlined" {...cardProps} />
);

export default CustomCard;

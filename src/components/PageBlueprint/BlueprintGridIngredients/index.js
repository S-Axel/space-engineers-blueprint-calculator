import PropTypes from 'prop-types';
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { propTypeIngredient } from '../../../prop_types';
import roundToDec from '../../../utils/roundToDec';
import CustomCard from '../../CustomCard';
import CustomCardHeader from '../../CustomCardHeader';

const BlueprintGridIngredients = ({ title, ingredients, action }) => (
  <CustomCard>
    <CustomCardHeader title={title} action={action} />
    <CardContent sx={{ overflowX: 'auto' }}>
      <Table padding="normal" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((block) => (
            <TableRow key={block.name}>
              <TableCell>{block.name}</TableCell>
              <TableCell>{roundToDec(block.count, 1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </CustomCard>
);

BlueprintGridIngredients.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(propTypeIngredient).isRequired,
  action: PropTypes.node,
};

BlueprintGridIngredients.defaultProps = {
  action: null,
};

export default BlueprintGridIngredients;

import { TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

import roundToDec from '../../../utils/roundToDec';
import { propTypeIngredient } from '../../../prop_types';

const IngredientsTableBodyCells = ({ ingredients }) => (
  <>
    {ingredients.map((block) => (
      <TableRow key={block.name}>
        <TableCell>{block.displayNameValue}</TableCell>
        <TableCell>{roundToDec(block.count, 1)}</TableCell>
      </TableRow>
    ))}
  </>
);

IngredientsTableBodyCells.propTypes = {
  ingredients: PropTypes.arrayOf(propTypeIngredient).isRequired,
};

export default IngredientsTableBodyCells;

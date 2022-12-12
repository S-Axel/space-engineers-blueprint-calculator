import { TableCell, TableRow, TableSortLabel } from '@mui/material';
import PropTypes from 'prop-types';

import INGREDIENT_COLUMN from '../../../constants/ingredient_column';
import SORT_DIRECTION from '../../../constants/sort_direction';

const IngredientsTableHeadCells = ({ sortBy, sortDirection, onSortClick }) => (
  <TableRow>
    {Object.values(INGREDIENT_COLUMN).map((column) => (
      <TableCell key={column.id} sortDirection={sortBy === column.id ? sortDirection : null}>
        <TableSortLabel
          active={sortBy === column.id}
          direction={sortDirection || SORT_DIRECTION.ASC}
          onClick={() => onSortClick(column.id)}
        >
          {column.label}
        </TableSortLabel>
      </TableCell>
    ))}
  </TableRow>
);

IngredientsTableHeadCells.propTypes = {
  sortBy: PropTypes.oneOf(Object.values(INGREDIENT_COLUMN).map((column) => column.id)).isRequired,
  sortDirection: PropTypes.oneOf(Object.values(SORT_DIRECTION)).isRequired,
  onSortClick: PropTypes.func.isRequired,
};

export default IngredientsTableHeadCells;

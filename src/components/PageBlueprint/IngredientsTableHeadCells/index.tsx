import { TableCell, TableRow, TableSortLabel } from '@mui/material';

import INGREDIENT_COLUMN from '../../../constants/ingredient_column';
import IngredientColumnId from '../../../enums/IngredientColumnId';
import SortDirection from '../../../enums/SortDirection';

interface IngredientsTableHeadCellsProps {
  sortBy: IngredientColumnId;
  sortDirection: SortDirection;
  onSortClick: (columnClickedId: IngredientColumnId) => void;
}

const IngredientsTableHeadCells = (
  ({ sortBy, sortDirection, onSortClick }: IngredientsTableHeadCellsProps) => (
    <TableRow>
      {Object.values(INGREDIENT_COLUMN).map((column) => (
        <TableCell key={column.id} sortDirection={sortBy === column.id ? sortDirection : undefined}>
          <TableSortLabel
            active={sortBy === column.id}
            direction={sortDirection}
            onClick={() => onSortClick(column.id)}
          >
            {column.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  )
);

export default IngredientsTableHeadCells;

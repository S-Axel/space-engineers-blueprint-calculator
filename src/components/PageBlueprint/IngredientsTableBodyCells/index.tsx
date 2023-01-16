import { TableCell, TableRow } from '@mui/material';

import roundToDec from '../../../utils/roundToDec';
import { Ingredient } from '../../../services/blueprintService/types';

interface IngredientsTableBodyCellsProps {
  ingredients: Ingredient[];
}

const IngredientsTableBodyCells = ({ ingredients }: IngredientsTableBodyCellsProps) => (
  <>
    {ingredients.map((block) => (
      <TableRow key={block.name}>
        <TableCell>{block.displayNameValue}</TableCell>
        <TableCell>{roundToDec(block.count, 1)}</TableCell>
      </TableRow>
    ))}
  </>
);

export default IngredientsTableBodyCells;

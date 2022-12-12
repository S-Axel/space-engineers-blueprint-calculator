import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import { propTypeIngredient } from '../../../prop_types';
import roundToDec from '../../../utils/roundToDec';
import CustomCard from '../../CustomCard';
import CustomCardHeader from '../../CustomCardHeader';
import INGREDIENT_COLUMN from '../../../constants/ingredient_column';
import SORT from '../../../constants/sort';
import COMPARE_FUNCTION from '../../../constants/compare_function';

const BlueprintGridIngredients = ({ title, ingredients, action }) => {
  const [orderBy, setOrderBy] = useState(INGREDIENT_COLUMN.COUNT.id);
  const [order, setOrder] = useState(SORT.DESC);
  const [sortedIngredients, setSortedIngredients] = useState(ingredients);

  const onSortClickHandler = (columnClickedId) => {
    if (orderBy === columnClickedId) {
      setOrder((previousOrder) => (previousOrder === SORT.ASC ? SORT.DESC : SORT.ASC));
    } else {
      setOrderBy(columnClickedId);
      setOrder(SORT.ASC);
    }
  };

  useEffect(() => {
    const newSortedIngredients = [...ingredients]
      .sort((ingredientA, ingredientB) => {
        const ingredientAValue = ingredientA[orderBy];
        const ingredientBValue = ingredientB[orderBy];

        const typeToSort = typeof ingredientAValue;
        const sortFunction = COMPARE_FUNCTION[typeToSort];

        if (order === SORT.ASC) {
          return sortFunction(ingredientAValue, ingredientBValue);
        }
        return sortFunction(ingredientBValue, ingredientAValue);
      });

    setSortedIngredients(newSortedIngredients);
  }, [orderBy, order, ingredients]);

  return (
    <CustomCard>
      <CustomCardHeader title={title} action={action} />
      <CardContent sx={{ overflowX: 'auto' }}>
        <Table padding="normal" size="small">
          <TableHead>
            <TableRow>
              {Object.values(INGREDIENT_COLUMN).map((column) => (
                <TableCell key={column.id} sortDirection={orderBy === column.id ? order : null}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order || SORT.ASC}
                    onClick={() => onSortClickHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedIngredients.map((block) => (
              <TableRow key={block.name}>
                <TableCell>{block.displayNameValue}</TableCell>
                <TableCell>{roundToDec(block.count, 1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CustomCard>
  );
};

BlueprintGridIngredients.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(propTypeIngredient).isRequired,
  action: PropTypes.node,
};

BlueprintGridIngredients.defaultProps = {
  action: null,
};

export default BlueprintGridIngredients;

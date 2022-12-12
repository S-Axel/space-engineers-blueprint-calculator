import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  Table,
  TableBody,
  TableHead,
} from '@mui/material';

import { propTypeIngredient } from '../../../prop_types';
import CustomCard from '../../CustomCard';
import CustomCardHeader from '../../CustomCardHeader';
import INGREDIENT_COLUMN from '../../../constants/ingredient_column';
import SORT_DIRECTION from '../../../constants/sort_direction';
import COMPARE_FUNCTION from '../../../constants/compare_function';
import IngredientsTableHeadCells from '../IngredientsTableHeadCells';
import IngredientsTableBodyCells from '../IngredientsTableBodyCells';

const BlueprintGridIngredients = ({ title, ingredients, action }) => {
  const [sortBy, setSortBy] = useState(INGREDIENT_COLUMN.COUNT.id);
  const [sortDirection, setSortDirection] = useState(SORT_DIRECTION.DESC);
  const [sortedIngredients, setSortedIngredients] = useState(ingredients);

  const onSortClickHandler = (columnClickedId) => {
    if (sortBy === columnClickedId) {
      setSortDirection(
        (previousOrder) => (
          previousOrder === SORT_DIRECTION.ASC ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC
        ),
      );
    } else {
      setSortBy(columnClickedId);
      setSortDirection(SORT_DIRECTION.ASC);
    }
  };

  useEffect(() => {
    const newSortedIngredients = [...ingredients]
      .sort((ingredientA, ingredientB) => {
        const ingredientAValue = ingredientA[sortBy];
        const ingredientBValue = ingredientB[sortBy];

        const typeToSort = typeof ingredientAValue;
        const sortFunction = COMPARE_FUNCTION[typeToSort];

        if (sortDirection === SORT_DIRECTION.ASC) {
          return sortFunction(ingredientAValue, ingredientBValue);
        }
        return sortFunction(ingredientBValue, ingredientAValue);
      });

    setSortedIngredients(newSortedIngredients);
  }, [sortBy, sortDirection, ingredients]);

  return (
    <CustomCard>
      <CustomCardHeader title={title} action={action} />
      <CardContent sx={{ overflowX: 'auto' }}>
        <Table padding="normal" size="small">
          <TableHead>
            <IngredientsTableHeadCells
              sortDirection={sortDirection}
              sortBy={sortBy}
              onSortClick={onSortClickHandler}
            />
          </TableHead>
          <TableBody>
            <IngredientsTableBodyCells ingredients={sortedIngredients} />
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

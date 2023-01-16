import { ReactNode, useEffect, useState } from 'react';
import {
  CardContent,
  Table,
  TableBody,
  TableHead,
} from '@mui/material';

import CustomCard from '../../CustomCard';
import CustomCardHeader from '../../CustomCardHeader';
import INGREDIENT_COLUMN from '../../../constants/ingredientColumn';
import SortDirection from '../../../enums/SortDirection';
import IngredientsTableHeadCells from '../IngredientsTableHeadCells';
import IngredientsTableBodyCells from '../IngredientsTableBodyCells';
import { Ingredient } from '../../../services/blueprintService/types';
import IngredientColumnId from '../../../enums/IngredientColumnId';
import sortCompareFunction from '../../../utils/sortCompareFunction';

interface BlueprintGridIngredientsProps {
  title: string;
  ingredients: Ingredient[];
  action?: ReactNode;
}

const BlueprintGridIngredients = (
  ({ title, ingredients, action = null }: BlueprintGridIngredientsProps) => {
    const [sortBy, setSortBy] = useState(INGREDIENT_COLUMN.COUNT.id);
    const [sortDirection, setSortDirection] = useState(SortDirection.DESC);
    const [sortedIngredients, setSortedIngredients] = useState(ingredients);

    const onSortClickHandler = (columnClickedId: IngredientColumnId) => {
      if (sortBy === columnClickedId) {
        setSortDirection(
          (previousDirection) => (
            previousDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC
          ),
        );
      } else {
        setSortBy(columnClickedId);
        setSortDirection(SortDirection.ASC);
      }
    };

    useEffect(() => {
      const newSortedIngredients = [...ingredients]
        .sort((ingredientA, ingredientB) => {
          const ingredientAValue = ingredientA[sortBy];
          const ingredientBValue = ingredientB[sortBy];

          if (sortDirection === SortDirection.ASC) {
            return sortCompareFunction(ingredientAValue, ingredientBValue);
          }
          return sortCompareFunction(ingredientBValue, ingredientAValue);
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
  }
);

export default BlueprintGridIngredients;

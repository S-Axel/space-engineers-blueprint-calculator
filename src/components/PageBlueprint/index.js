import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material';

import BlueprintTitle from './BlueprintTitle';
import BlueprintGridList from './BlueprintGridList';
import BlueprintGridTitle from './BlueprintGridTitle';
import { propTypeBlueprint } from '../../prop_types';
import GRID_OPTION from '../../constants/grid_option';
import { getSelectedGridInfo } from '../../services/blueprintService';
import BlueprintGridIngots from './BlueprintGridIngots';
import BlueprintGridIngredients from './BlueprintGridIngredients';
import AddBlueprintButton from './AddBlueprintButton';

const PageBlueprint = ({ blueprint }) => {
  const [state, setState] = useState({
    // possible values for selectedGrids: 'all', 'main', any subgrid index as a number
    selectedGrid: GRID_OPTION.ALL,
    selectedGridInfo: getSelectedGridInfo(blueprint, GRID_OPTION.ALL),
    listOpen: false,
  });

  const theme = useTheme();

  const transition = {
    transitionProperty: 'margin, width',
    transitionDuration: `${theme.transitions.duration.shortest}ms`,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  };

  const onGridChangeHandler = (newGrid) => {
    setState((prevState) => ({
      ...prevState,
      selectedGrid: newGrid,
      selectedGridInfo: getSelectedGridInfo(blueprint, newGrid),
    }));
  };

  const onGridListOpenChangeHandler = (isExpanded) => {
    setState((prevState) => ({ ...prevState, listOpen: isExpanded }));
  };

  const onAddBlueprintButtonClickHandler = () => {
    // eslint-disable-next-line no-console
    console.log('Add blueprint button clicked');
  };

  return (
    <>
      <Grid xs={3} sm={7} md={11}>
        <BlueprintTitle blueprint={blueprint} />
      </Grid>
      <Grid
        xs={1}
        sx={{
          position: 'sticky',
          top: '32px',
          zIndex: 'fab',
          textAlign: 'right',
        }}
      >
        <AddBlueprintButton
          onClick={onAddBlueprintButtonClickHandler}
          sx={{ position: 'relative', right: { lg: '-96px' } }}
        />
      </Grid>
      <Grid container xs={12} sx={{ position: 'relative' }}>
        <Grid xs={12} md={3} sx={{ position: { md: state.listOpen ? 'absolute' : 'static' } }}>
          <BlueprintGridList
            blueprint={blueprint}
            selectedGrid={state.selectedGrid}
            onGridChange={onGridChangeHandler}
            onOpenChange={onGridListOpenChangeHandler}
          />
        </Grid>
        <Grid xs={12} mdOffset={state.listOpen ? 3 : 0} md={9}>
          <BlueprintGridTitle
            selectedGrid={state.selectedGrid}
            selectedGridInfo={state.selectedGridInfo}
          />
        </Grid>
      </Grid>
      <Grid
        xs={12}
        md={state.listOpen ? 9 : 12}
        mdOffset={state.listOpen ? 3 : 0}
        sx={transition}
      >
        <BlueprintGridIngredients
          title="Blocks"
          ingredients={state.selectedGridInfo.recipe.blocks}
        />
      </Grid>
      <Grid
        xs={12}
        mdOffset={state.listOpen ? 3 : 0}
        md={state.listOpen ? 9 : 6}
        sx={transition}
      >
        <BlueprintGridIngredients
          title="Components"
          ingredients={state.selectedGridInfo.recipe.components}
        />
      </Grid>
      <Grid
        xs={12}
        mdOffset={state.listOpen ? 3 : 0}
        md={state.listOpen ? 9 : 6}
        sx={transition}
      >
        <BlueprintGridIngots ingots={state.selectedGridInfo.recipe.ingots} />
      </Grid>
    </>
  );
};

PageBlueprint.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default PageBlueprint;

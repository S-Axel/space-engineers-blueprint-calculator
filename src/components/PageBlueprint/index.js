import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import BlueprintTitle from './BlueprintTitle';
import BlueprintGridList from './BlueprintGridList';
import BlueprintGridTitle from './BlueprintGridTitle';
import { propTypeBlueprint } from '../../prop_types';
import GRID_OPTION from '../../constants/grid_option';
import { getSelectedGridInfo } from '../../services/blueprintService';
import BlueprintGridIngots from './BlueprintGridIngots';

const PageBlueprint = ({ blueprint }) => {
  const [state, setState] = useState({
  // possible values for selectedGrids: 'all', 'main', any subgrid index as a number
    selectedGrid: GRID_OPTION.ALL,
    selectedGridInfo: getSelectedGridInfo(blueprint, GRID_OPTION.ALL),
  });

  const onGridChangeHandler = (newGrid) => {
    setState({
      selectedGrid: newGrid,
      selectedGridInfo: getSelectedGridInfo(blueprint, newGrid),
    });
  };

  return (
    <>
      <Grid xs={12}>
        <BlueprintTitle blueprint={blueprint} />
      </Grid>
      <Grid xs={3}>
        <BlueprintGridList
          blueprint={blueprint}
          selectedGrid={state.selectedGrid}
          onGridChange={onGridChangeHandler}
        />
      </Grid>
      <Grid xs={9}>
        <BlueprintGridTitle
          selectedGrid={state.selectedGrid}
          selectedGridInfo={state.selectedGridInfo}
        />
      </Grid>
      <Grid xs={3}>
        <BlueprintGridIngots ingots={state.selectedGridInfo.recipe.ingots} />
      </Grid>
    </>
  );
};

PageBlueprint.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default PageBlueprint;

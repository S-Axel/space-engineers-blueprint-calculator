import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import BlueprintTitle from './BlueprintTitle';
import BlueprintGridList from './BlueprintGridList';
import BlueprintGridTitle from './BlueprintGridTitle';
import { propTypeBlueprint } from '../../prop_types';
import GRID_OPTION from '../../constants/grid_option';

const PageBlueprint = ({ blueprint }) => {
  // possible values for selectedGrids: 'all', 'main', any subgrid index as a number
  const [selectedGrid, setSelectedGrid] = useState(GRID_OPTION.ALL);

  const onGridChangeHandler = (newGrid) => {
    setSelectedGrid(newGrid);
  };

  return (
    <>
      <Grid xs={12}>
        <BlueprintTitle blueprint={blueprint} />
      </Grid>
      <Grid xs={3}>
        <BlueprintGridList
          blueprint={blueprint}
          selectedGrid={selectedGrid}
          onGridChange={onGridChangeHandler}
        />
      </Grid>
      <Grid xs={9}>
        <BlueprintGridTitle blueprint={blueprint} selectedGrid={selectedGrid} />
      </Grid>
    </>
  );
};

PageBlueprint.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default PageBlueprint;

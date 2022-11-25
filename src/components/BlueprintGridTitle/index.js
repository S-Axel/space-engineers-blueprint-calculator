import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardHeader } from '@mui/material';

import GRID_OPTION from '../../constants/grid_option';

const gridOptionStrings = {
  [GRID_OPTION.ALL]: 'All grids',
  [GRID_OPTION.MAIN]: 'Main grid',
  [GRID_OPTION.SUB]: 'Sub grid: ',
};

const getSelectedGridInfo = (blueprint, selectedGrid) => {
  if (typeof selectedGrid === 'number') {
    return blueprint.subGrids[selectedGrid];
  }
  if (selectedGrid === GRID_OPTION.MAIN) {
    return blueprint.mainGrid;
  }
  return blueprint;
};

const BlueprintGridTitle = ({ blueprint, selectedGrid }) => {
  const selectedGridInfo = getSelectedGridInfo(blueprint, selectedGrid);
  const title = typeof selectedGrid === 'number'
    ? `Sub grid: ${selectedGridInfo.name}`
    : gridOptionStrings[selectedGrid];
  return (
    <Grid xs={8}>
      <Card>
        <CardHeader title={} />
      </Card>
    </Grid>
  );
};

export default BlueprintGridTitle;

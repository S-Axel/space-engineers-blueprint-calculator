import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import GRID_OPTION from '../../../constants/grid_option';
import { propTypeBlueprint } from '../../../prop_types';
import { getSelectedGridInfo } from '../../../services/blueprintService';

const gridOptionStrings = {
  [GRID_OPTION.ALL]: 'All grids',
  [GRID_OPTION.MAIN]: 'Main grid',
};

const BlueprintGridTitle = ({ blueprint, selectedGrid }) => {
  const selectedGridInfo = getSelectedGridInfo(blueprint, selectedGrid);
  const title = typeof selectedGrid === 'number'
    ? `Sub grid: ${selectedGridInfo.name}`
    : gridOptionStrings[selectedGrid];
  return (
    <Grid xs={9}>
      <Card elevation={2}>
        <CardHeader title={title} />
        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          <Typography>{`Number of blocks: ${selectedGridInfo.blockCount}`}</Typography>
          <Typography>{`Mass: ${selectedGridInfo.mass} kg`}</Typography>
          <Typography>{`PCU: ${selectedGridInfo.pcuCost}`}</Typography>
          {selectedGrid !== GRID_OPTION.ALL && <Typography>{`Grid size: ${selectedGridInfo.size}`}</Typography>}
        </CardContent>
      </Card>
    </Grid>
  );
};

BlueprintGridTitle.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
  selectedGrid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default BlueprintGridTitle;

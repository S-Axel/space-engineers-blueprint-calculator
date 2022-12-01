import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import GRID_OPTION from '../../../constants/grid_option';
import { propTypeBlueprint, propTypeGrid } from '../../../prop_types';

const gridOptionStrings = {
  [GRID_OPTION.ALL]: 'All grids',
  [GRID_OPTION.MAIN]: 'Main grid',
};

const BlueprintGridTitle = ({ selectedGrid, selectedGridInfo }) => {
  const title = typeof selectedGrid === 'number'
    ? `Sub grid: ${selectedGridInfo.name}`
    : gridOptionStrings[selectedGrid];
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <Typography>{`Number of blocks: ${selectedGridInfo.blockCount}`}</Typography>
        <Typography>{`Mass: ${selectedGridInfo.mass} kg`}</Typography>
        <Typography>{`PCU: ${selectedGridInfo.pcuCost}`}</Typography>
        {selectedGrid !== GRID_OPTION.ALL && <Typography>{`Grid size: ${selectedGridInfo.size}`}</Typography>}
      </CardContent>
    </Card>
  );
};

BlueprintGridTitle.propTypes = {
  selectedGrid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedGridInfo: PropTypes.oneOfType([propTypeBlueprint, propTypeGrid]).isRequired,
};

export default BlueprintGridTitle;

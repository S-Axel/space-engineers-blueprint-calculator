import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { propTypeBlueprint } from '../../prop_types';

const getDlcString = (dlc) => {
  if (typeof dlc === 'string') {
    return `Requires 1 DLC: ${dlc}`;
  }
  if (Array.isArray(dlc)) {
    return `Requires ${dlc.length} DLCs: ${dlc.join(', ')}`;
  }
  return 'No DLC required';
};

const BlueprintTitle = ({ blueprint }) => {
  const dlcString = getDlcString(blueprint.dlc);

  return (
    <Grid xs={12}>
      <Typography variant="h5" component="h2">
        {blueprint.name}
      </Typography>
      <Typography variant="caption" component="p">
        {`From: ${blueprint.owner.name}`}
      </Typography>
      <Typography variant="caption" component="p">
        {dlcString}
      </Typography>
    </Grid>
  );
};

BlueprintTitle.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default BlueprintTitle;

import { Typography } from '@mui/material';

import { propTypeBlueprint } from '../../../prop_types';

const getDlcString = (dlc) => {
  if (typeof dlc === 'string') {
    return `Requires 1 DLC: ${dlc}`;
  }
  if (Array.isArray(dlc)) {
    return `Requires ${dlc.length} DLCs: ${dlc.join(', ')}`;
  }
  return 'No DLC required';
};

const sx = {
  color: 'primary.contrastText',
};

const BlueprintTitle = ({ blueprint }) => {
  const dlcString = getDlcString(blueprint.dlc);

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ ...sx, fontWeight: 500 }}>
        {blueprint.name}
      </Typography>
      <Typography variant="caption" component="p" sx={sx}>
        {`From: ${blueprint.owner.name}`}
      </Typography>
      <Typography variant="caption" component="p" sx={sx}>
        {dlcString}
      </Typography>
    </>
  );
};

BlueprintTitle.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default BlueprintTitle;

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

const BlueprintTitle = ({ blueprint }) => {
  const dlcString = getDlcString(blueprint.dlc);

  return (
    <>
      <Typography variant="h5" component="h2">
        {blueprint.name}
      </Typography>
      <Typography variant="caption" component="p">
        {`From: ${blueprint.owner.name}`}
      </Typography>
      <Typography variant="caption" component="p">
        {dlcString}
      </Typography>
    </>
  );
};

BlueprintTitle.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default BlueprintTitle;

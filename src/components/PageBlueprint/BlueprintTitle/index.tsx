import { Typography } from '@mui/material';

import { Blueprint } from '../../../services/blueprintService/types';

const getDlcString = (dlc: string[]) => {
  if (!dlc.length) {
    return 'No DLC required';
  }
  if (dlc.length === 1) {
    return `Requires 1 DLC: ${dlc[0]}`;
  }
  return `Requires ${dlc.length} DLCs: ${dlc.join(', ')}`;
};

const commonStyle = {
  color: 'primary.contrastText',
};

interface BlueprintTitleProps {
  blueprint: Blueprint;
}

/**
 * Displays the title of the blueprint, including the name, owner, and DLC requirements.
 * @param {Blueprint} blueprint
 * @return {JSX.Element}
 * @constructor
 */
const BlueprintTitle = ({ blueprint }: BlueprintTitleProps) => {
  const dlcString = getDlcString(blueprint.dlc);

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ ...commonStyle, fontWeight: 500 }}>
        {blueprint.name}
      </Typography>
      <Typography variant="caption" component="p" sx={commonStyle}>
        {`From: ${blueprint.owner.name}`}
      </Typography>
      <Typography variant="caption" component="p" sx={commonStyle}>
        {dlcString}
      </Typography>
    </>
  );
};

export default BlueprintTitle;

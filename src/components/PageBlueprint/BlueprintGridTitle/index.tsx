import { CardContent, Typography } from '@mui/material';

import GridDisplayOption from '../../../enums/GridDisplayOption';
import CustomCard from '../../CustomCard';
import CustomCardHeader from '../../CustomCardHeader';
import { Blueprint, Grid } from '../../../services/blueprintService/types';

const GridDisplayOptionDictionary: Record<GridDisplayOption, string> = {
  [GridDisplayOption.ALL]: 'All grids',
  [GridDisplayOption.MAIN]: 'Main grid',
};

interface BlueprintGridTitleProps {
  selectedGrid: GridDisplayOption | number;
  selectedGridInfo: Grid | Blueprint;
}

/**
 * Display the title of the selected grid and basic information about it.
 * @param {GridDisplayOption | number} selectedGrid
 * @param {Grid | Blueprint} selectedGridInfo
 * @return {JSX.Element}
 * @constructor
 */
const BlueprintGridTitle = ({ selectedGrid, selectedGridInfo }: BlueprintGridTitleProps) => {
  const title = typeof selectedGrid === 'number'
    ? `Sub grid: ${selectedGridInfo.name}`
    : GridDisplayOptionDictionary[selectedGrid];
  return (
    <CustomCard>
      <CustomCardHeader title={title} />
      <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <Typography>{`Number of blocks: ${selectedGridInfo.blockCount}`}</Typography>
        <Typography>{`Mass: ${selectedGridInfo.mass} kg`}</Typography>
        <Typography>{`PCU: ${selectedGridInfo.pcuCost}`}</Typography>
        {'size' in selectedGridInfo && <Typography>{`Grid size: ${selectedGridInfo.size}`}</Typography>}
      </CardContent>
    </CustomCard>
  );
};

export default BlueprintGridTitle;

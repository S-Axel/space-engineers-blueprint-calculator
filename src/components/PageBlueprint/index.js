import { useState } from 'react';

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
      <BlueprintTitle blueprint={blueprint} />
      <BlueprintGridList
        blueprint={blueprint}
        selectedGrid={selectedGrid}
        onGridChange={onGridChangeHandler}
      />
      <BlueprintGridTitle blueprint={blueprint} selectedGrid={selectedGrid} />
    </>
  );
};

PageBlueprint.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default PageBlueprint;

import { useState } from 'react';

import PageBlueprint from '../../components/PageBlueprint';
import GRID_OPTION from '../../constants/grid_option';
import { propTypeBlueprint } from '../../prop_types';

const PageBlueprintContainer = ({ blueprint }) => {
  // possible values for selectedGrids: 'all', 'main', any subgrid index as a number
  const [selectedGrid, setSelectedGrid] = useState(GRID_OPTION.ALL);

  const onGridChangeHandler = (newGrid) => {
    setSelectedGrid(newGrid);
  };

  return (
    <PageBlueprint
      blueprint={blueprint}
      selectedGrid={selectedGrid}
      onGridChange={onGridChangeHandler}
    />
  );
};

PageBlueprintContainer.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
};

export default PageBlueprintContainer;

import PropTypes from 'prop-types';

import BlueprintGridList from '../../components/BlueprintGridList';
import { propTypeBlueprint } from '../../prop_types';
import GRID_OPTION from '../../constants/grid_option';

const BlueprintGridListContainer = ({ blueprint, selectedGrid, onGridChange }) => {
  const gridOptions = [
    { name: 'All', id: GRID_OPTION.ALL },
    { name: 'Main grid', id: GRID_OPTION.MAIN },
    ...blueprint.subGrids.map((grid, index) => ({ name: grid.name, id: index })),
  ];
  return (
    <BlueprintGridList
      blueprint={blueprint}
      selectedGrid={selectedGrid}
      onGridChange={onGridChange}
      gridOptions={gridOptions}
    />
  );
};

BlueprintGridListContainer.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
  selectedGrid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onGridChange: PropTypes.func.isRequired,
};

export default BlueprintGridListContainer;

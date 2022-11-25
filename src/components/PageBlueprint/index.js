import PropTypes from 'prop-types';

import BlueprintTitle from '../BlueprintTitle';
import BlueprintGridListContainer from '../../containers/BlueprintGridListContainer';
import { propTypeBlueprint } from '../../prop_types';
import BlueprintGridTitle from '../BlueprintGridTitle';

const PageBlueprint = ({ blueprint, selectedGrid, onGridChange }) => (
  <>
    <BlueprintTitle blueprint={blueprint} />
    <BlueprintGridListContainer
      blueprint={blueprint}
      selectedGrid={selectedGrid}
      onGridChange={onGridChange}
    />
    <BlueprintGridTitle blueprint={blueprint} selectedGrid={selectedGrid} />
  </>
);

PageBlueprint.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
  selectedGrid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onGridChange: PropTypes.func.isRequired,
};

export default PageBlueprint;

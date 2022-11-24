import PropTypes from 'prop-types';

import BlueprintTitle from '../BlueprintTitle';
import BlueprintGridListContainer from '../../containers/BlueprintGridListContainer';
import { propTypeBlueprint } from '../../prop_types';

const PageBlueprint = ({ blueprint, selectedGrid, onGridChange }) => (
  <>
    <BlueprintTitle blueprint={blueprint} />
    <BlueprintGridListContainer
      blueprint={blueprint}
      selectedGrid={selectedGrid}
      onGridChange={onGridChange}
    />
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

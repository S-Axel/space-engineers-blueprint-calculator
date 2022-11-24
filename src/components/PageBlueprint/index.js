import PropTypes from 'prop-types';
import BlueprintTitle from '../BlueprintTitle';
import BlueprintGridListContainer from '../../containers/BlueprintGridListContainer';

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
  // eslint-disable-next-line react/forbid-prop-types
  blueprint: PropTypes.object.isRequired,
  selectedGrid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onGridChange: PropTypes.func.isRequired,
};

export default PageBlueprint;

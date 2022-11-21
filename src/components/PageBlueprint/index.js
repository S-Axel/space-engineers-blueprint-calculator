import PropTypes from 'prop-types';
import BlueprintTitle from '../BlueprintTitle';

const PageBlueprint = ({ blueprint }) => (
  <BlueprintTitle blueprint={blueprint} />
);

PageBlueprint.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blueprint: PropTypes.object.isRequired,
};

export default PageBlueprint;

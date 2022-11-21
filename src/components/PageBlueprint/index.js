import PropTypes from 'prop-types';

const PageBlueprint = ({ blueprint }) => (blueprint.name);

PageBlueprint.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blueprint: PropTypes.object.isRequired,
};

export default PageBlueprint;

import PropTypes from 'prop-types';

import PageFileDnd from '../PageFileDnd';

const BlueprintCalculator = ({ blueprint, updateFile }) => (
  blueprint || <PageFileDnd updateFile={updateFile} />
);

BlueprintCalculator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blueprint: PropTypes.object,
  updateFile: PropTypes.func.isRequired,
};

BlueprintCalculator.defaultProps = {
  blueprint: null,
};

export default BlueprintCalculator;

import PropTypes from 'prop-types';

import PageFileDnd from '../PageFileDnd';
import PageBlueprintContainer from '../../containers/PageBlueprintContainer';
import { propTypeBlueprint } from '../../prop_types';

const BlueprintCalculator = ({ blueprint, updateFile }) => (
  blueprint
    ? <PageBlueprintContainer blueprint={blueprint} />
    : <PageFileDnd updateFile={updateFile} />
);

BlueprintCalculator.propTypes = {
  blueprint: propTypeBlueprint,
  updateFile: PropTypes.func.isRequired,
};

BlueprintCalculator.defaultProps = {
  blueprint: null,
};

export default BlueprintCalculator;

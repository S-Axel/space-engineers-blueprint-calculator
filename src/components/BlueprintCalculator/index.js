import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';

import FileDnd from '../FileDnd';

const BlueprintCalculator = ({ blueprint, updateFile }) => (
  <Grid xs={12}>
    <FileDnd updateFile={updateFile} />
    <div>blueprint description</div>
    <div>{blueprint}</div>
  </Grid>
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

import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader } from '@mui/material';

import FileDnd from '../FileDnd';

// eslint-disable-next-line no-unused-vars
const BlueprintCalculator = ({ blueprint, updateFile }) => (
  <Grid xs={10} mdOffset={1}>
    <Card elevation={2}>
      <CardHeader title="Import a blueprint to be analyzed" titleTypographyProps={{ component: 'h2', variant: 'h5' }} />
      <CardContent>
        <FileDnd updateFile={updateFile} />
      </CardContent>
    </Card>
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

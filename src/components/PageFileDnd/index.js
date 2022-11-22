import { Card, CardContent, CardHeader } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';

import FileDndContainer from '../../containers/FileDndContainer';

const PageFileDnd = ({ updateFile }) => (
  <Grid xs={10} mdOffset={1}>
    <Card elevation={2}>
      <CardHeader title="Import a blueprint to be analyzed" titleTypographyProps={{ component: 'h2', variant: 'h5' }} />
      <CardContent>
        <FileDndContainer updateFile={updateFile} />
      </CardContent>
    </Card>
  </Grid>
);

PageFileDnd.propTypes = {
  updateFile: PropTypes.func.isRequired,
};

export default PageFileDnd;

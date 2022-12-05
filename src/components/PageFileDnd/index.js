import { CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';

import FileDnd from '../FileDnd';
import CustomCard from '../CustomCard';
import CustomCardHeader from '../CustomCardHeader';

const PageFileDnd = ({ updateFile }) => (
  <Grid xs={10} mdOffset={1}>
    <CustomCard>
      <CustomCardHeader title="Import a blueprint to be analyzed" titleTypographyProps={{ component: 'h2' }} />
      <CardContent>
        <FileDnd updateFile={updateFile} />
      </CardContent>
    </CustomCard>
  </Grid>
);

PageFileDnd.propTypes = {
  updateFile: PropTypes.func.isRequired,
};

export default PageFileDnd;

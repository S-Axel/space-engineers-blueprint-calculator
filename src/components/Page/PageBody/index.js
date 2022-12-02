import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const PageBody = ({ children }) => (
  <Box
    component="section"
    sx={{
      flexGrow: 1,
      margin: { xs: '16px', sm: '32px', md: '32px auto', lg: '32px 200px', xl: '32px auto' },
      width: { xs: 'auto', md: '840px', lg: 'auto', xl: '1040px' },
    }}
  >
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {children}
    </Grid>
  </Box>
);

PageBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBody;

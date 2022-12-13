import { AppBar, Toolbar, Typography } from '@mui/material';

/**
 * PageHeader component
 * @return {JSX.Element}
 * @constructor
 */
const PageHeader = () => (
  <AppBar color="transparent" sx={{ position: 'static' }} elevation={1}>
    <Toolbar>
      <Typography component="h1" variant="h6" sx={{ color: 'common.white' }}>Space Engineers BP Calculator</Typography>
    </Toolbar>
  </AppBar>
);

export default PageHeader;

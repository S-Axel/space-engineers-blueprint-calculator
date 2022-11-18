import { AppBar, Toolbar, Typography } from '@mui/material';

/**
 * PageHeader component
 * @return {JSX.Element}
 * @constructor
 */
const PageHeader = () => (
  <AppBar sx={{ position: 'static' }}>
    <Toolbar>
      <Typography component="span" variant="h6">Space Engineers Blueprint Calculator</Typography>
    </Toolbar>
  </AppBar>
);

export default PageHeader;

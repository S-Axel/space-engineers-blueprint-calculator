/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Link, Toolbar, Typography } from '@mui/material';

const PageFooter = () => (
  <Box sx={{ backgroundColor: 'grey.800' }}>
    <Toolbar sx={{ justifyContent: 'center', gap: '8px' }}>
      <Link component="button" color="common.white" underline="hover">Try with a default blueprint</Link>
      <Typography component="span" sx={{ color: 'common.white' }}>.</Typography>
      <Link component="button" color="common.white" underline="hover">Contact us</Link>
    </Toolbar>
  </Box>
);

export default PageFooter;

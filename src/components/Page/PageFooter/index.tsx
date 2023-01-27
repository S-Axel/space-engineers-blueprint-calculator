/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Link, Toolbar, Typography } from '@mui/material';

const PageFooter = ({ useDefaultBlueprint }: {
  useDefaultBlueprint: () => void;
}) => (
  <Box component="footer" sx={{ backgroundColor: 'grey.800' }}>
    <Toolbar sx={{ justifyContent: 'center', gap: '8px' }}>
      <Link
        component="button"
        color="primary.contrastText"
        underline="hover"
        onClick={useDefaultBlueprint}
      >
        Try with a default blueprint
      </Link>
      <Typography component="span" sx={{ color: 'primary.contrastText' }}>.</Typography>
      <Link component="button" color="primary.contrastText" underline="hover">Contact us</Link>
    </Toolbar>
  </Box>
);

export default PageFooter;

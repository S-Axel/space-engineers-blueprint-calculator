import PropTypes from 'prop-types';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddBlueprintButton = ({ onClick, sx, ...props }) => (
  <Fab
    onClick={onClick}
    aria-label="add a blueprint"
    color="secondary"
    sx={{
      color: 'primary.contrastText',
      backgroundColor: 'primary.light',
      ...sx,
    }}
    {...props}
  >
    <AddIcon />
  </Fab>
);

AddBlueprintButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};

AddBlueprintButton.defaultProps = {
  sx: {},
};

export default AddBlueprintButton;

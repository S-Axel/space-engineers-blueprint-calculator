import PropTypes from 'prop-types';
import {
  Dialog, DialogContent, DialogTitle,
  Fab, IconButton,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

import FileDnd from '../../FileDnd';

const ImportBlueprintModal = ({ updateFile, sx, ...props }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const isBreakpointUpSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const onFabClickHandler = () => {
    setDialogOpen(true);
  };

  const onDialogCloseHandler = () => {
    setDialogOpen(false);
  };

  const updateFileHandler = (file) => {
    updateFile(file);
    setDialogOpen(false);
  };

  return (
    <>
      <Fab
        onClick={onFabClickHandler}
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
      <Dialog
        open={dialogOpen}
        onClose={onDialogCloseHandler}
        fullWidth
        maxWidth="md"
        fullScreen={!isBreakpointUpSm}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">
          Import a blueprint to be analyzed
          <IconButton onClick={onDialogCloseHandler} sx={{ float: 'right' }}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <FileDnd updateFile={updateFileHandler} />
        </DialogContent>
      </Dialog>
    </>
  );
};

ImportBlueprintModal.propTypes = {
  updateFile: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};

ImportBlueprintModal.defaultProps = {
  sx: {},
};

export default ImportBlueprintModal;

import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import { Alert, Box, Typography } from '@mui/material';
import { FileUploader } from 'react-drag-drop-files';
import { useState } from 'react';

const acceptedFileTypes = ['sbc'];

interface FileDndProps {
  updateFile: (file: File) => void;
}

/**
 * File drag and drop component with internal error handling and display
 * @param {(file: File) => void} updateFile
 * @return {JSX.Element}
 * @constructor
 */
const FileDnd = ({ updateFile }: FileDndProps) => {
  const [error, setError] = useState('');

  const onDraggingStateChangeHandler = (dragging: boolean) => {
    if (dragging) setError('');
  };

  const onChangeHandler = (file: File | File[]) => {
    if (Array.isArray(file)) {
      setError('Please drop only one file');
      return;
    }
    updateFile(file);
    setError('');
  };

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <FileUploader
        handleChange={onChangeHandler}
        types={acceptedFileTypes}
        multiple={false}
        hoverTitle=" "
        onTypeError={setError}
        onDraggingStateChange={onDraggingStateChangeHandler}
      >
        <Box sx={{
          padding: { xs: '32px 16px', sm: '64px 16px' },
          borderStyle: 'dashed',
          borderWidth: '1px',
          borderColor: 'secondary.main',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
        >
          <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileDownloadIcon sx={{ fontSize: '2rem', color: 'primary.main' }} />
            drag and drop a file
          </Typography>
          <Typography>or click to browse</Typography>
        </Box>
      </FileUploader>
      <Typography variant="caption" component="p" sx={{ marginTop: '16px' }}>
        Space Engineers blueprints have the .sbc extension.
        <br />
        You may find your personnal blueprints in your
        %appdata%/SpaceEngineers/Blueprints folder by default.
      </Typography>
    </>
  );
};

export default FileDnd;

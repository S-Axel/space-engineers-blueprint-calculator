import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import { Alert, Box, Typography } from '@mui/material';
import { FileUploader } from 'react-drag-drop-files';
import PropTypes from 'prop-types';

const fileTypes = ['sbc'];

const FileDnd = ({ error, onDraggingStateChange, onChange, onTypeError }) => (
  <>
    {error && <Alert severity="error">{error}</Alert>}
    <FileUploader
      handleChange={onChange}
      types={fileTypes}
      multiple={false}
      hoverTitle=" "
      onTypeError={onTypeError}
      onDraggingStateChange={onDraggingStateChange}
    >
      <Box sx={{
        padding: { xs: '32px 16px', sm: '64px 16px' },
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderColor: 'primary.light',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
      >
        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FileDownloadIcon sx={{ fontSize: '2rem' }} />
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

FileDnd.propTypes = {
  error: PropTypes.string,
  onDraggingStateChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onTypeError: PropTypes.func.isRequired,
};

FileDnd.defaultProps = {
  error: '',
};

export default FileDnd;

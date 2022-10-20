import { FileUploader } from 'react-drag-drop-files';
import PropTypes from 'prop-types';

const fileTypes = ['sbc'];

const FileDnd = ({ updateFile }) => (
  <FileUploader handleChange={updateFile} types={fileTypes} multiple={false} />
);

FileDnd.propTypes = {
  updateFile: PropTypes.func.isRequired,
};

export default FileDnd;

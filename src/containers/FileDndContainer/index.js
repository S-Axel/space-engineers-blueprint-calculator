import { useState } from 'react';
import PropTypes from 'prop-types';
import FileDnd from '../../components/FileDnd';

const FileDndContainer = ({ updateFile }) => {
  const [error, setError] = useState('');

  const onDraggingStateChangeHandler = (dragging) => {
    if (dragging) setError('');
  };

  const onChangeHandler = (file) => {
    updateFile(file);
    setError('');
  };

  return (
    <FileDnd
      error={error}
      onChange={onChangeHandler}
      onDraggingStateChange={onDraggingStateChangeHandler}
      onTypeError={setError}
    />
  );
};

FileDndContainer.propTypes = {
  updateFile: PropTypes.func.isRequired,
};

export default FileDndContainer;

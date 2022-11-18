import PropTypes from 'prop-types';

import FileDnd from '../FileDnd';
import PageHeader from '../PageHeader';

const BlueprintPage = ({ blueprint, updateFile }) => (
  <>
    <PageHeader />
    <FileDnd updateFile={updateFile} />
    <div>blueprint description</div>
    <div>{blueprint}</div>
  </>
);

BlueprintPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blueprint: PropTypes.object,
  updateFile: PropTypes.func.isRequired,
};

BlueprintPage.defaultProps = {
  blueprint: null,
};

export default BlueprintPage;

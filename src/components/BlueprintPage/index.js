import PropTypes from 'prop-types';

import FileDnd from '../FileDnd';
import Page from '../Page';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import PageBody from '../PageBody';

const BlueprintPage = ({ blueprint, updateFile }) => (
  <Page>
    <PageHeader />
    <PageBody>
      <FileDnd updateFile={updateFile} />
      <div>blueprint description</div>
      <div>{blueprint}</div>
    </PageBody>
    <PageFooter />
  </Page>
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

import { CssBaseline } from '@mui/material';

import BlueprintCalculatorContainer from '../../containers/BlueprintCalculatorContainer';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import PageBody from '../PageBody';
import Page from '../Page';

const App = () => (
  <>
    <CssBaseline />
    <Page>
      <PageHeader />
      <PageBody>
        <BlueprintCalculatorContainer />
      </PageBody>
      <PageFooter />
    </Page>
  </>
);

export default App;

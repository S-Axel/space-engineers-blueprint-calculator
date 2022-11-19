import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../../theme';
import BlueprintCalculatorContainer from '../../containers/BlueprintCalculatorContainer';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import PageBody from '../PageBody';
import Page from '../Page';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Page>
      <PageHeader />
      <PageBody>
        <BlueprintCalculatorContainer />
      </PageBody>
      <PageFooter />
    </Page>
  </ThemeProvider>
);

export default App;

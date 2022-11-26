import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../../theme';
import BlueprintCalculator from '../BlueprintCalculator';
import PageHeader from '../Page/PageHeader';
import PageFooter from '../Page/PageFooter';
import PageBody from '../Page/PageBody';
import Page from '../Page';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Page>
      <PageHeader />
      <PageBody>
        <BlueprintCalculator />
      </PageBody>
      <PageFooter />
    </Page>
  </ThemeProvider>
);

export default App;

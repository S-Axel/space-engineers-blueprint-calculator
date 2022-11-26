import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../../theme';
import PageHeader from '../Page/PageHeader';
import PageFooter from '../Page/PageFooter';
import PageBody from '../Page/PageBody';
import Page from '../Page';
import { computeBlueprint } from '../../services/blueprintService';
import PageBlueprint from '../PageBlueprint';
import PageFileDnd from '../PageFileDnd';

const App = () => {
  const [blueprint, setBlueprint] = useState(null);

  const updateFile = async (newFile) => {
    try {
      const xml = await newFile.text();
      const newBlueprint = computeBlueprint(xml);
      setBlueprint(newBlueprint);
      console.log(newBlueprint);
    } catch (error) {
      console.log('An error occured, try with another file.\n', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page>
        <PageHeader />
        <PageBody>
          {
            blueprint
              ? <PageBlueprint blueprint={blueprint} />
              : <PageFileDnd updateFile={updateFile} />
          }
        </PageBody>
        <PageFooter />
      </Page>
    </ThemeProvider>
  );
};

export default App;

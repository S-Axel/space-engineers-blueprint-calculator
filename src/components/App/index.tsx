import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../../theme';
import PageHeader from '../Page/PageHeader';
import PageFooter from '../Page/PageFooter';
import PageBody from '../Page/PageBody';
import Page from '../Page';
import { computeBlueprint, translateBlueprint } from '../../services/blueprintService';
import PageBlueprint from '../PageBlueprint';
import PageFileDnd from '../PageFileDnd';
import { Blueprint } from '../../services/blueprintService/types';

const App = () => {
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);

  const updateFile = async (newFile: File) => {
    try {
      const xml = await newFile.text();
      const newBlueprint = computeBlueprint(xml);
      translateBlueprint(newBlueprint);
      setBlueprint(newBlueprint);
      // eslint-disable-next-line no-console
      console.log(newBlueprint);
    } catch (error) {
      // eslint-disable-next-line no-console
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
              ? <PageBlueprint blueprint={blueprint} updateFile={updateFile} />
              : <PageFileDnd updateFile={updateFile} />
          }
        </PageBody>
        <PageFooter />
      </Page>
    </ThemeProvider>
  );
};

export default App;

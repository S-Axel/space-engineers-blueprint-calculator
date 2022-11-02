import { useState } from 'react';

import BlueprintPage from '../../components/BlueprintPage';
import { computeBlueprint } from '../../services/blueprintService';

const BlueprintPageContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [blueprint, setBlueprint] = useState(null);

  const updateFile = async (newFile) => {
    try {
      const xml = await newFile.text();
      const newBlueprint = computeBlueprint(xml);
      console.log(newBlueprint);
    } catch (error) {
      console.log('An error occured, try with another file.\n', error);
    }
  };

  return (
    <BlueprintPage blueprint={blueprint} updateFile={updateFile} />
  );
};

export default BlueprintPageContainer;

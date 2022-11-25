import { useState } from 'react';

import { computeBlueprint } from '../../services/blueprintService';
import PageBlueprint from '../PageBlueprint';
import PageFileDnd from '../PageFileDnd';

const BlueprintCalculator = () => {
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
    blueprint
      ? <PageBlueprint blueprint={blueprint} />
      : <PageFileDnd updateFile={updateFile} />
  );
};

export default BlueprintCalculator;

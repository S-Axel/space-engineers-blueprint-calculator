import { useState } from 'react';

import BlueprintCalculator from '../../components/BlueprintCalculator';
import { computeBlueprint } from '../../services/blueprintService';

const BlueprintCalculatorContainer = () => {
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
    <BlueprintCalculator blueprint={blueprint} updateFile={updateFile} />
  );
};

export default BlueprintCalculatorContainer;

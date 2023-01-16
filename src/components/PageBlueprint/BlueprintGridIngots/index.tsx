import { useState } from 'react';

import Efficiency from '../../../enums/Efficiency';
import AssemblerEfficiencyMenu from '../AssemblerEfficiencyMenu';
import BlueprintGridIngredients from '../BlueprintGridIngredients';
import { Ingredient } from '../../../services/blueprintService/types';

interface BlueprintGridIngotsProps {
  ingots: Ingredient[];
}

const BlueprintGridIngots = ({ ingots }: BlueprintGridIngotsProps) => {
  const [assemblerEfficiency, setAssemblerEfficiency] = useState(Efficiency.NORMAL);
  const computedIngots = ingots.map((ingot) => ({
    ...ingot,
    count: ingot.count / assemblerEfficiency,
  }));

  const onEfficiencyChangeHandler = (newEfficiency: Efficiency) => {
    setAssemblerEfficiency(newEfficiency);
  };

  return (
    <BlueprintGridIngredients
      title="Ingots"
      ingredients={computedIngots}
      action={(
        <AssemblerEfficiencyMenu
          efficiency={assemblerEfficiency}
          onEfficiencyChange={onEfficiencyChangeHandler}
        />
      )}
    />
  );
};

export default BlueprintGridIngots;

import { useState } from 'react';
import PropTypes from 'prop-types';

import { propTypeIngredient } from '../../../prop_types';
import EFFICIENCY from '../../../constants/efficiency';
import AssemblerEfficiencyMenu from '../AssemblerEfficiencyMenu';
import BlueprintGridIngredients from '../BlueprintGridIngredients';

const BlueprintGridIngots = ({ ingots }) => {
  const [assemblerEfficiency, setAssemblerEfficiency] = useState(EFFICIENCY.NORMAL);
  const computedIngots = ingots.map((ingot) => ({
    ...ingot,
    count: ingot.count / assemblerEfficiency,
  }));

  const onEfficiencyChangeHandler = (newEfficiency) => {
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

BlueprintGridIngots.propTypes = {
  ingots: PropTypes.arrayOf(propTypeIngredient).isRequired,
};

export default BlueprintGridIngots;

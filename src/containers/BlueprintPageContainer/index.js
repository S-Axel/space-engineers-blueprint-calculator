import { useState } from 'react';

import BlueprintPage from '../../components/BlueprintPage';

const BlueprintPageContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [blueprint, setBlueprint] = useState(null);

  const updateFile = () => {};

  return (
    <BlueprintPage blueprint={blueprint} updateFile={updateFile} />
  );
};

export default BlueprintPageContainer;

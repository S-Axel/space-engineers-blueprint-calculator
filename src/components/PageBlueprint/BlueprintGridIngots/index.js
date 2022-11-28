import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent,
  Table, TableHead, TableRow, TableCell, TableBody,
} from '@mui/material';

import { propTypeIngredient } from '../../../prop_types';
import EFFICIENCY from '../../../constants/efficiency';
import AssemblerEfficiencyMenu from '../AssemblerEfficiencyMenu';
import roundToDec from '../../../utils/roundToDec';

const BlueprintGridIngots = ({ ingots }) => {
  const [assemblerEfficiency, setAssemblerEfficiency] = useState(EFFICIENCY.NORMAL);

  const onEfficiencyChangeHandler = (newEfficiency) => {
    setAssemblerEfficiency(newEfficiency);
  };

  return (
    <Card>
      <CardHeader
        title="Ingots"
        action={(
          <AssemblerEfficiencyMenu
            efficiency={assemblerEfficiency}
            onEfficiencyChange={onEfficiencyChangeHandler}
          />
        )}
      />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingots.map((ingot) => (
              <TableRow key={ingot.name}>
                <TableCell>{ingot.name}</TableCell>
                <TableCell>{roundToDec(ingot.count / assemblerEfficiency, 1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

BlueprintGridIngots.propTypes = {
  ingots: PropTypes.arrayOf(propTypeIngredient).isRequired,
};

export default BlueprintGridIngots;

import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import PropTypes from 'prop-types';

import roundToDec from '../../../utils/roundToDec';
import { propTypeIngredient } from '../../../prop_types';

const BlueprintGridComponents = ({ components }) => (
  <Card>
    <CardHeader title="Components" />
    <CardContent sx={{ overflowX: 'auto' }}>
      <Table padding="normal" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {components.map((component) => (
            <TableRow key={component.name}>
              <TableCell>{component.name}</TableCell>
              <TableCell>{roundToDec(component.count, 1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

BlueprintGridComponents.propTypes = {
  components: PropTypes.arrayOf(propTypeIngredient).isRequired,
};

export default BlueprintGridComponents;

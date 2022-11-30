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

const BlueprintGridBlocks = ({ blocks }) => (
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
          {blocks.map((block) => (
            <TableRow key={block.name}>
              <TableCell>{block.name}</TableCell>
              <TableCell>{roundToDec(block.count, 1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

BlueprintGridBlocks.propTypes = {
  blocks: PropTypes.arrayOf(propTypeIngredient).isRequired,
};

export default BlueprintGridBlocks;

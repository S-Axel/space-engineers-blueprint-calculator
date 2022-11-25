import {
  Accordion, AccordionDetails, AccordionSummary,
  MenuList, MenuItem,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

import { propTypeBlueprint } from '../../prop_types';

const BlueprintGridList = ({ blueprint, selectedGrid, onGridChange, gridOptions }) => (
  <Grid xs={3}>
    <Accordion elevation={2}>
      <AccordionSummary
        sx={{ alignItems: 'center' }}
        expandIcon={<ExpandMoreIcon />}
        id="grid_list_header"
        aria-controls="grid_list_content"
      >
        <span>
          <Typography component="span">Grids</Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{ color: 'text.secondary', flexGrow: 1, marginLeft: '8px' }}
          >
            {`${blueprint.subGrids.length} subgrid${blueprint.subGrids.length > 1 ? 's' : ''}`}
          </Typography>
        </span>
      </AccordionSummary>
      <AccordionDetails>
        <MenuList>
          {gridOptions.map((grid) => (
            <MenuItem
              key={grid.id}
              dense
              sx={grid.id === selectedGrid ? { fontWeight: 'bolder' } : {}}
              onClick={() => onGridChange(grid.id)}
            >
              {grid.name}
            </MenuItem>
          ))}
        </MenuList>
      </AccordionDetails>
    </Accordion>
  </Grid>
);

BlueprintGridList.propTypes = {
  blueprint: propTypeBlueprint.isRequired,
  selectedGrid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onGridChange: PropTypes.func.isRequired,
  gridOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
};

export default BlueprintGridList;

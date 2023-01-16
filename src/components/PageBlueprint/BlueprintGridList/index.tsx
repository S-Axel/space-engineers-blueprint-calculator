import {
  Accordion, AccordionDetails, AccordionSummary,
  MenuList, MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GridDisplayOption from '../../../enums/GridDisplayOption';
import { Blueprint } from '../../../services/blueprintService/types';

interface BlueprintGridListProps {
  blueprint: Blueprint;
  selectedGrid: GridDisplayOption | number;
  onGridChange: (grid: GridDisplayOption | number) => void;
  onOpenChange: (open: boolean) => void;
}

/**
 * Display a list of grids in order to select one.
 * @param {Blueprint} blueprint
 * @param {GridDisplayOption | number} selectedGrid
 * @param {(grid: (GridDisplayOption | number)) => void} onGridChange
 * @param {(open: boolean) => void} onOpenChange
 * @return {JSX.Element}
 * @constructor
 */
const BlueprintGridList = ({
  blueprint,
  selectedGrid,
  onGridChange,
  onOpenChange,
}: BlueprintGridListProps) => {
  const gridOptions = [
    { name: 'All', id: GridDisplayOption.All },
    { name: 'Main grid', id: GridDisplayOption.Main },
    ...blueprint.subGrids.map((grid, index) => ({ name: grid.name, id: index })),
  ];
  const theme = useTheme();

  const onAccordionTransitionExited = () => {
    onOpenChange(false);
  };

  const onAccordionTransitionEnter = () => {
    onOpenChange(true);
  };

  return (
    <Accordion
      variant="outlined"
      TransitionProps={{
        onEnter: onAccordionTransitionEnter,
        onExited: onAccordionTransitionExited,
        timeout: theme.transitions.duration.shorter,
      }}
    >
      <AccordionSummary
        sx={{ alignItems: 'center' }}
        expandIcon={<ExpandMoreIcon />}
        id="grid_list_header"
        aria-controls="grid_list_content"
      >
        <span>
          <Typography component="span" variant="h6">Grids</Typography>
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
  );
};

export default BlueprintGridList;

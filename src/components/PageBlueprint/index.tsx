import { useEffect, useState } from 'react';
import MuiGrid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material';

import BlueprintTitle from './BlueprintTitle';
import BlueprintGridList from './BlueprintGridList';
import BlueprintGridTitle from './BlueprintGridTitle';
import GridDisplayOption from '../../enums/GridDisplayOption';
import { getSelectedGridInfo } from '../../services/blueprintService';
import BlueprintGridIngots from './BlueprintGridIngots';
import BlueprintGridIngredients from './BlueprintGridIngredients';
import ImportBlueprintModal from './ImportBlueprintModal';
import { Blueprint, Grid } from '../../services/blueprintService/types';

interface PageBlueprintProps {
  blueprint: Blueprint;
  updateFile: (file: File) => void;
}

interface State {
  selectedGrid: GridDisplayOption | number;
  selectedGridInfo: Grid | Blueprint;
  listOpen: boolean;
}

const PageBlueprint = ({ blueprint, updateFile }: PageBlueprintProps) => {
  const [state, setState] = useState<State>({
    // possible values for selectedGrid:
    // 'all', 'main' from GridDisplayOption and any subgrid index as a number
    selectedGrid: GridDisplayOption.All,
    selectedGridInfo: getSelectedGridInfo(blueprint, GridDisplayOption.All),
    listOpen: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      selectedGrid: GridDisplayOption.All,
      selectedGridInfo: getSelectedGridInfo(blueprint, GridDisplayOption.All),
    }));
  }, [blueprint]);

  const theme = useTheme();

  const transition = {
    transitionProperty: 'margin, width',
    transitionDuration: `${theme.transitions.duration.shortest}ms`,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  };

  const onGridChangeHandler = (newGrid: GridDisplayOption | number) => {
    setState((prevState) => ({
      ...prevState,
      selectedGrid: newGrid,
      selectedGridInfo: getSelectedGridInfo(blueprint, newGrid),
    }));
  };

  const onGridListOpenChangeHandler = (isExpanded: boolean) => {
    setState((prevState) => ({ ...prevState, listOpen: isExpanded }));
  };

  return (
    <>
      <MuiGrid xs={3} sm={7} md={11}>
        <BlueprintTitle blueprint={blueprint} />
      </MuiGrid>
      <MuiGrid
        xs={1}
        sx={{
          position: 'sticky',
          top: '32px',
          zIndex: 'fab',
          textAlign: 'right',
        }}
      >
        <ImportBlueprintModal
          sx={{ position: 'relative', right: { lg: '-96px' } }}
          updateFile={updateFile}
        />
      </MuiGrid>
      <MuiGrid container xs={12} sx={{ position: 'relative' }}>
        <MuiGrid xs={12} md={3} sx={{ position: { md: state.listOpen ? 'absolute' : 'static' } }}>
          <BlueprintGridList
            blueprint={blueprint}
            selectedGrid={state.selectedGrid}
            onGridChange={onGridChangeHandler}
            onOpenChange={onGridListOpenChangeHandler}
          />
        </MuiGrid>
        <MuiGrid xs={12} mdOffset={state.listOpen ? 3 : 0} md={9}>
          <BlueprintGridTitle
            selectedGrid={state.selectedGrid}
            selectedGridInfo={state.selectedGridInfo}
          />
        </MuiGrid>
      </MuiGrid>
      <MuiGrid
        xs={12}
        md={state.listOpen ? 9 : 12}
        mdOffset={state.listOpen ? 3 : 0}
        sx={transition}
      >
        <BlueprintGridIngredients
          title="Blocks"
          ingredients={state.selectedGridInfo.recipe.blocks}
        />
      </MuiGrid>
      <MuiGrid
        xs={12}
        mdOffset={state.listOpen ? 3 : 0}
        md={state.listOpen ? 9 : 6}
        sx={transition}
      >
        <BlueprintGridIngredients
          title="Components"
          ingredients={state.selectedGridInfo.recipe.components}
        />
      </MuiGrid>
      <MuiGrid
        xs={12}
        mdOffset={state.listOpen ? 3 : 0}
        md={state.listOpen ? 9 : 6}
        sx={transition}
      >
        <BlueprintGridIngots ingots={state.selectedGridInfo.recipe.ingots} />
      </MuiGrid>
    </>
  );
};

export default PageBlueprint;

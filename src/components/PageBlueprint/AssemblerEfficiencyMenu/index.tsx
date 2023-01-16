import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Efficiency from '../../../enums/Efficiency';

interface AssemblerEfficiencyMenuProps {
  efficiency: Efficiency;
  onEfficiencyChange: (newEfficiency: Efficiency) => void;
}

const AssemblerEfficiencyMenu = (
  ({ efficiency, onEfficiencyChange }: AssemblerEfficiencyMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const open = !!anchorEl;

    const onClickMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const onCloseHandler = () => {
      setAnchorEl(null);
    };

    const buildOnClickMenuHandler = (clickEfficiency: Efficiency) => {
      const onClickMenuItemHandler = () => {
        onEfficiencyChange(clickEfficiency);
        onCloseHandler();
      };
      return onClickMenuItemHandler;
    };

    return (
      <>
        <IconButton
          onClick={onClickMenuHandler}
          aria-haspopup="true"
          aria-expanded={open ? true : undefined}
          aria-controls={open ? 'assembler-efficiency-menu' : undefined}
        >
          <SettingsOutlinedIcon sx={{ color: 'primary.light' }} />
        </IconButton>
        <Menu
          id="assembler-efficiency-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={onCloseHandler}
        >
          <MenuItem dense disabled>Assembler efficiency</MenuItem>
          {Object.values(Efficiency).map((mapEfficiency) => (
            <MenuItem
              key={mapEfficiency}
              onClick={buildOnClickMenuHandler(mapEfficiency as Efficiency)}
              selected={mapEfficiency === efficiency}
              dense
            >
              {`X${mapEfficiency}`}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  });

export default AssemblerEfficiencyMenu;

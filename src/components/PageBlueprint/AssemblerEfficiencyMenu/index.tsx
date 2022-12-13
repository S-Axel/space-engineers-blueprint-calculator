import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PropTypes from 'prop-types';

import EFFICIENCY from '../../../constants/efficiency';

const AssemblerEfficiencyMenu = ({ efficiency, onEfficiencyChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const onClickMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseHandler = () => {
    setAnchorEl(null);
  };

  const buildOnClickMenuHandler = (clickEfficiency) => {
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
        {Object.values(EFFICIENCY).map((mapEfficiency) => (
          <MenuItem
            key={mapEfficiency}
            onClick={buildOnClickMenuHandler(mapEfficiency)}
            selected={mapEfficiency === efficiency}
            dense
          >
            {`X${mapEfficiency}`}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

AssemblerEfficiencyMenu.propTypes = {
  efficiency: PropTypes.number.isRequired,
  onEfficiencyChange: PropTypes.func.isRequired,
};

export default AssemblerEfficiencyMenu;

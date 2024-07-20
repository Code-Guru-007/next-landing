import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type NavSetLangProps = {
  offsetTop: boolean;
};

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  borderRadius: 0,
  '& .MuiPaper-root': {
    borderRadius: '0 0 8px 8px',
    borderTop: `3px solid ${theme.palette.primary.main}`,
    backgroundImage: 'none',
  },
  '& .MuiMenu-paper': {
    marginTop: theme.spacing(2),
    minWidth: 250,
    padding: theme.spacing(2),
    '& .MuiMenuItem-root': {
      padding: '10px 8px',
    },
  },
}));

export default function NavSetLang({ offsetTop }: Readonly<NavSetLangProps>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        disableElevation
        sx={{
          color: offsetTop ? 'black' : 'white',
          marginLeft: '10px',
        }}
        variant="text"
        onClick={handleClick}
      >
        <LanguageIcon />
        <KeyboardArrowDownIcon />
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          中文
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          English
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

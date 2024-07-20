// @mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// theme
import { paper } from 'src/theme/css';
//
import { HEADER } from '../../../config-layout';
import { NavItemDesktopProps } from '../types';

// ----------------------------------------------------------------------

type ListItemProps = Omit<NavItemDesktopProps, 'item'>;

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'offsetTop' && prop !== 'subItem',
})<ListItemProps>(({ open, offsetTop, subItem, theme }) => ({
  ...theme.typography.subtitle2,
  padding: 0,
  height: '100%',
  color: theme.palette.common.white,
  transition: theme.transitions.create(['opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    backgroundColor: 'transparent',
  },
  // Sub item
  ...(subItem && {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  }),
  // offsetTop
  ...(offsetTop && {
    color: theme.palette.text.primary,
  }),
  // Open
  ...(open && {
    opacity: 0.48,
  }),
}));

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  right: 0,
  margin: 'auto',
  position: 'absolute',
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(2),
  top: HEADER.H_DESKTOP_OFFSET,
  boxShadow: theme.customShadows.dropdown,
  width: 250,
  borderRadius: '0 0 8px 8px',
  borderTop: `3px solid ${theme.palette.primary.main}`,
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  padding: 0,
  fontSize: 11,
  color: theme.palette.text.primary,
}));

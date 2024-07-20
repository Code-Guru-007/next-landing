'use client';

import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { useBoolean } from 'src/hooks/use-boolean';
import { usePathname, useRouter } from 'src/routes/hook';
import { useActiveLink } from 'src/routes/hook/use-active-link';
//
import { Box, ListItem, MenuItem } from '@mui/material';
import { NavItemProps } from '../types';
import { NavItem, NavItemDashboard } from './nav-item';
import { StyledSubheader, StyledMenu } from './styles';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
  offsetTop: boolean;
};

export default function NavList({ item, offsetTop }: Readonly<NavListProps>) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path, children } = item;

  const active = useActiveLink(path, false);

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };

  return (
    <Box position="relative">
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
        open={nav.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />
      {!!children && nav.value && (
        <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={nav.onFalse}>
          {children.map((list) => (
            <NavSubList
              key={list.subheader}
              subheader={list.subheader}
              items={list.items}
              isDashboard={list.subheader === 'Dashboard'}
              onClose={nav.onFalse}
            />
          ))}
        </StyledMenu>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({ items, isDashboard, subheader, onClose }: Readonly<NavSubListProps>) {
  const router = useRouter();

  return (
    <Stack
      spacing={1.2}
      alignItems="flex-start"
      sx={{
        flexGrow: 1,
        ...(isDashboard && {
          maxWidth: 250,
        }),
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.8px',
      }}
    >
      {subheader && <StyledSubheader disableSticky>{subheader}</StyledSubheader>}

      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <MenuItem
            key={item.title}
            onClick={() => {
              if (item.scrollTo) {
                const element = document.getElementById(item.scrollTo);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              } else router.push(item.path);
              onClose();
            }}
            sx={{ fontSize: 14, fontWeight: 400, p: '10px 8px', cursor: 'pointer', width: '100%' }}
          >
            {item.title}
          </MenuItem>
        )
      )}
    </Stack>
  );
}

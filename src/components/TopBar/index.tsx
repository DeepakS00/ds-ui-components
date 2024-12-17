import React, { useRef, useState } from 'react';

import { Box, Flex, IconButton, IconButtonProps } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { CaratLogo } from '../../assets/Logo/CaratLogo';
import IconHamburger from '../../assets/Logo/IconHamburger';
import NavDrawer from '../Drawer/Drawer';
import { Provider } from '../ui/provider';

export interface NavBarProps {
  menuList?: Array<{
    menuItemProps: {
      to?: string;
      as?: React.ElementType;
      onClick?: () => void;
    };
    title: string;
    description?: string;
  }>;
  HeaderLogo?: React.ElementType;
  isOpen?: boolean;
  onClose?: () => void;
  handleClose?: () => void;
  hederaAccountId?: string;
  btnRef?: React.RefObject<any>;
  styling?: object;
  [key: string]: any;
}

const MenuButton = React.forwardRef((props: Partial<IconButtonProps>, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <IconButton
      aria-label='Navigation'
      variant='ghost'
      _active={{ bg: 'gray.100' }}
      _hover={{ bg: 'gray.200' }}
      _dark={{ _hover: { bg: 'whiteAlpha.200' } }}
      {...props}
      ref={ref}
    >
      <IconHamburger fontSize='2xl' stroke='black' />
    </IconButton>
  );
});

const menuList = [
  {
    title: 'Profile',
    description: 'Update name, email or default location, delete account',
    menuItemProps: {
      to: '/profile',
      as: Link,
    },
  },
  {
    title: 'Transactions',
    description: 'View a history of payments sent and received',
    menuItemProps: {
      to: '/transactions',
      as: Link,
    },
  },
  {
    title: 'Purchase',
    description: 'View a history of purchase transactions',
    menuItemProps: {
      to: '/purchase',
      as: Link,
    },
  },
  {
    title: 'Security',
    description: 'Backup or restore wallet, security PIN',
    menuItemProps: {
      to: '/security',
      as: Link,
    },
  },
  {
    title: 'Logout',
    description: '',
    menuItemProps: {
      onClick: () => console.log('Logged out succesfully'),
    },
  },
];

function TopBar(props: NavBarProps) {
  const headerLogo = () => <CaratLogo fontSize='150px' fill='brand.600' _dark={{ fill: 'white' }} />;
  const btnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuOptions = [...menuList, ...(props?.menuList || [])];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Flex
        position='fixed'
        top='0'
        insetStart='0'
        insetEnd='0'
        maxW='80ch'
        m='auto'
        align='center'
        pt='safe-top'
        px='5'
        h={'64px'}
        bg='gray.50'
        color='gray.800'
        justifyContent={'space-between'}
        _dark={{
          bg: 'gray.800',
          color: 'gray.50',
        }}
      >
        <Link to='/'>
          <CaratLogo fontSize='150px' fill='brand.600' _dark={{ fill: 'white' }} />
        </Link>
        <MenuButton
          ref={btnRef}
          display={{ base: 'flex' }}
          mr='-0.5rem'
          borderRadius='full'
          _focusVisible={{ shadow: 'outline' }}
          onClick={handleOpen}
        />
      </Flex>

      <Box />
      <NavDrawer
        menuList={menuOptions}
        HeaderLogo={headerLogo}
        btnRef={btnRef}
        isOpen={isOpen}
        handleClose={handleClose}
        onClose={handleClose}
        hederaAccountId='0.0.5101947'
      />
    </>
  );
}

export default function TopBarComponent(props: NavBarProps) {
  return (
    <Provider>
      <TopBar {...props} />
    </Provider>
  );
}

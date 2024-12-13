import React, { useRef, useState } from 'react';

import { Box, Button, CloseButton, Flex, IconButton, IconButtonProps, SlideFade } from '@chakra-ui/react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import { Icon } from '../../components/Icons';
import { CaratLogo } from '../../assets/Logo/CaratLogo';
import IconHamburger from '../../assets/Logo/IconHamburger';
import NavDrawer from '../Drawer/Drawer';

const MenuButton = React.forwardRef((props: Partial<IconButtonProps>, ref) => {
  return (
    <IconButton
      ref={ref}
      aria-label='Navigation'
      icon={<Icon icon={IconHamburger} fontSize='2xl' stroke='black' _dark={{ stroke: 'white' }} />}
      variant='unstyled'
      _active={{ bg: 'gray.100' }}
      _hover={{ bg: 'gray.200' }}
      _dark={{ _hover: { bg: 'whiteAlpha.200' } }}
      {...props}
    />
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
    title: 'Escrow',
    description: 'View and create an escrow account',
    menuItemProps: {
      to: '/escrow',
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

export default function TopBar() {
  // const theme = useTheme();
  const { pathname } = useLocation();

  const headerLogo = () => <CaratLogo fontSize='150px' fill='brand.600' _dark={{ fill: 'white' }} />;
  const btnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const showTopNav = !pathname || ['/', '/dashboard'].includes(pathname);
  const showBackIcon = pathname && ['/transactions', '/escrow', '/settings', '/security', '/bitcarbon'].includes(pathname);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <SlideFade in offsetY={-40} style={{ zIndex: 5 }}>
        <Flex
          position='fixed'
          top='0'
          insetStart='0'
          insetEnd='0'
          // color="gray.50"
          maxW='80ch'
          m='auto'
          align='center'
          pt='safe-top'
          px='5'
          h={'64px'}
          bg='gray.50'
          color='gray.800'
          justifyContent={'space-between'}
          // boxShadow={offset > 35 ? 'layout' : 'none'}
          _dark={{
            bg: 'gray.800',
            color: 'gray.50',
            // boxShadow: offset > 35 ? 'layout' : 'none',
          }}
        >
          <Box as={Link} to='/'>
            <CaratLogo fontSize='150px' fill='brand.600' _dark={{ fill: 'white' }} />
          </Box>
          {showTopNav ? (
            <MenuButton
              ref={btnRef}
              display={{ base: 'flex' }}
              mr='-0.5rem'
              borderRadius='full'
              _focusVisible={{ shadow: 'outline' }}
              onClick={handleOpen}
            />
          ) : showBackIcon ? (
            <Button
              as={Link}
              to='/'
              fontSize='lg'
              pr='0'
              aria-label={'back button'}
              leftIcon={<MdArrowBack fontSize='xl' height='100px' />}
              background={'bottom'}
              border='none'
            >
              Back
            </Button>
          ) : (
            <CloseButton size='lg' as={Link} to='/' />
          )}
        </Flex>
      </SlideFade>
      <Box />
      <NavDrawer
        menuList={menuList}
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

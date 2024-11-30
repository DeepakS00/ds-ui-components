import { Box, BoxProps } from '@chakra-ui/react';

export default function MainMenuItem({ handleClose, to, ...rest }: BoxProps & { to?: string } & any) {
  return (
    <Box
      bg='transparent'
      to={to}
      justifyContent='flex-start'
      position='relative'
      // opacity={isActive ? 1 : 0.8}
      fontWeight='bold'
      borderRadius='md'
      px='3'
      py='1'
      _hover={{
        bg: 'gray.100',
        color: '#000000',
      }}
      _dark={{
        _hover: { bg: 'whiteAlpha.200' },
        color: 'white',
      }}
      _focusVisible={{
        outline: 'none',
        _after: {
          opacity: 1,
          w: '2rem',
        },
      }}
      _focus={{ bg: 'gray.100' }}
      onClick={handleClose}
      {...rest}
    />
  );
}

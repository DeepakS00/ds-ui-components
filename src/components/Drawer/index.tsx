import { ChakraProvider } from '@chakra-ui/react';
import NavDrawer, { NavDrawerProps } from './Drawer';
import theme from '../../theme';

export default function DrawerComponent({ props }: NavDrawerProps) {
  return (
    <ChakraProvider theme={{ ...theme }}>
      <NavDrawer {...props} />
    </ChakraProvider>
  );
}

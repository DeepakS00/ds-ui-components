import { Styles } from '@chakra-ui/theme-tools';

export const styles: Styles = {
  global: () => ({
    html: {
      bg: 'gray.50',
      _dark: {
        bg: 'gray.800',
      },
    },
    body: {
      overflowY: 'scroll',
      WebkitTapHighlightColor: 'transparent',
      bg: 'gray.50',
      _dark: {
        bg: 'gray.800',
      },
      display: 'block',
      placeItems: 'normal',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
  }),
};

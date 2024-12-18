import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import foundations from './foundations';
import { styles } from './styles';

export const theme = extendTheme({
  styles,
  ...foundations,
  components: { ...components },
});

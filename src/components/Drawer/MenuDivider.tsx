import { Separator } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MenuDivider = styled(Separator)({
  border: 0,
  borderBottom: '1px solid',
  borderColor: 'inherit',
  marginTop: 'var(--chakra-spacing-1)',
  marginBottom: ' var(--chakra-spacing-1)',
  opacity: '0.6',
});

export default MenuDivider;

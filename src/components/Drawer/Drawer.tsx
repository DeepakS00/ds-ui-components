import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import MainMenuItem from './MainMenuItem';
import MenuDivider from './MenuDivider';
import { LuCopy } from 'react-icons/lu';

interface NavDrawerProps {
  menuList: Array<{
    menuItemProps: {
      to?: string;
      as?: React.ElementType;
      onClick?: () => void;
    };
    title: string;
    description?: string;
  }>;
  HeaderLogo: React.ElementType;
  isOpen: boolean;
  onClose: () => void;
  handleClose: () => void;
  hederaAccountId: string;
  btnRef?: React.RefObject<any>;
  styling?: object;
  [key: string]: any;
}

const AccountNumber: React.FC<{ hederaAccountId: string }> = ({ hederaAccountId, ...rest }) => {
  const { hasCopied, onCopy } = useClipboard(hederaAccountId);
  return (
    <>
      <Flex
        role='group'
        position='relative'
        w='full'
        textAlign='center'
        justifyContent={'center'}
        px='3'
        py='2'
        fontSize='16px'
        fontWeight='bold'
        alignItems={'center'}
        outline='none'
        color='gray.500'
        gap='2'
        _hover={{ bg: 'none' }}
        _focusVisible={{ bg: 'gray.50' }}
        _dark={{
          color: 'gray.200',
          _focusVisible: { bg: 'gray.800' },
          _hover: { bg: 'none' },
        }}
        {...rest}
      >
        <Text as='span' fontSize='12px'>
          Hedera Account:
        </Text>
        <Text
          as='span'
          textDecoration={'underline'}
          color={hasCopied ? 'brand.600' : 'none'}
          _dark={{ color: hasCopied ? 'brand.400' : 'none' }}
        >
          {hederaAccountId}
        </Text>
        <IconButton
          onClick={onCopy}
          h='auto'
          w='auto'
          border='none'
          bg={'none'}
          color={hasCopied ? 'brand.600' : 'none'}
          _dark={{ color: hasCopied ? 'brand.400' : 'none', bg: 'none' }}
          aria-label='test'
          icon={<LuCopy />}
        />
      </Flex>
      <MenuDivider />
    </>
  );
};

export default function NavDrawer({
  menuList,
  HeaderLogo,
  isOpen,
  onClose,
  hederaAccountId,
  btnRef,
  handleClose,
  styling,
}: NavDrawerProps) {
  return (
    <Drawer colorScheme='dark' isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} placement='right'>
      <DrawerOverlay />
      <DrawerContent {...styling}>
        <DrawerHeader>{<HeaderLogo />}</DrawerHeader>
        <DrawerBody p='2'>
          <Stack direction='column' spacing={'1'}>
            {menuList.map((item, index) => (
              <React.Fragment key={index}>
                <MainMenuItem handleClose={handleClose} {...item.menuItemProps}>
                  <Flex flexDirection={'column'}>
                    <Text w='100%' fontSize='16px' marginBottom='0' fontWeight='600'>
                      {item.title}
                    </Text>
                    <Text fontSize='12px' lineHeight='1.2rem' fontWeight={'400'}>
                      {item.description}
                    </Text>
                  </Flex>
                </MainMenuItem>
                <MenuDivider />
              </React.Fragment>
            ))}
            <AccountNumber hederaAccountId={hederaAccountId} />
          </Stack>
        </DrawerBody>
        <DrawerCloseButton mt='safe-top' fontSize='lg' />
      </DrawerContent>
    </Drawer>
  );
}

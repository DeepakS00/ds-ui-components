import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

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

declare function DrawerComponent({ props }: NavDrawerProps): react_jsx_runtime.JSX.Element;

declare const theme: Record<string, any>;

declare function TopBarComponent(): react_jsx_runtime.JSX.Element;

export { DrawerComponent as SidebarDrawer, TopBarComponent as TopBar, theme as chakraTheme };

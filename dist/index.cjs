"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  SidebarDrawer: () => DrawerComponent,
  TopBar: () => TopBarComponent,
  chakraTheme: () => theme
});
module.exports = __toCommonJS(src_exports);

// src/components/Drawer/index.tsx
var import_react16 = require("@chakra-ui/react");

// src/components/Drawer/Drawer.tsx
var import_react2 = __toESM(require("react"), 1);
var import_react3 = require("@chakra-ui/react");

// src/components/Drawer/MainMenuItem.tsx
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
function MainMenuItem({ handleClose, to, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Box,
    {
      bg: "transparent",
      to,
      justifyContent: "flex-start",
      position: "relative",
      fontWeight: "bold",
      borderRadius: "md",
      px: "3",
      py: "1",
      _hover: {
        bg: "gray.100",
        color: "#000000"
      },
      _dark: {
        _hover: { bg: "whiteAlpha.200" },
        color: "white"
      },
      _focusVisible: {
        outline: "none",
        _after: {
          opacity: 1,
          w: "2rem"
        }
      },
      _focus: { bg: "gray.100" },
      onClick: handleClose,
      ...rest
    }
  );
}

// src/components/Drawer/Drawer.tsx
var import_lu = require("react-icons/lu");
var import_jsx_runtime2 = require("react/jsx-runtime");
var AccountNumber = ({ hederaAccountId, ...rest }) => {
  const { hasCopied, onCopy } = (0, import_react3.useClipboard)(hederaAccountId);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_react3.Flex,
      {
        role: "group",
        position: "relative",
        w: "full",
        textAlign: "center",
        justifyContent: "center",
        px: "3",
        py: "2",
        fontSize: "16px",
        fontWeight: "bold",
        alignItems: "center",
        outline: "none",
        color: "gray.500",
        gap: "2",
        _hover: { bg: "none" },
        _focusVisible: { bg: "gray.50" },
        _dark: {
          color: "gray.200",
          _focusVisible: { bg: "gray.800" },
          _hover: { bg: "none" }
        },
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Text, { as: "span", fontSize: "12px", children: "Hedera Account:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react3.Text,
            {
              as: "span",
              textDecoration: "underline",
              color: hasCopied ? "brand.600" : "none",
              _dark: { color: hasCopied ? "brand.400" : "none" },
              children: hederaAccountId
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react3.IconButton,
            {
              onClick: onCopy,
              h: "auto",
              w: "auto",
              border: "none",
              bg: "none",
              color: hasCopied ? "brand.600" : "none",
              _dark: { color: hasCopied ? "brand.400" : "none", bg: "none" },
              "aria-label": "test",
              icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lu.LuCopy, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react3.Divider,
      {
        border: 0,
        borderBottom: "1px solid",
        borderColor: "inherit",
        marginTop: "var(--chakra-space-1)",
        marginBottom: "var(--chakra-space-1)",
        opacity: "0.6"
      }
    )
  ] });
};
function NavDrawer({
  menuList: menuList2,
  HeaderLogo,
  isOpen,
  onClose,
  hederaAccountId,
  btnRef,
  handleClose,
  styling
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react3.Drawer, { colorScheme: "dark", isOpen, onClose, finalFocusRef: btnRef, placement: "right", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react3.DrawerContent, { ...styling, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.DrawerHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(HeaderLogo, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.DrawerBody, { p: "2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react3.Stack, { direction: "column", spacing: "1", children: [
        menuList2.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.default.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MainMenuItem, { handleClose, ...item.menuItemProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react3.Flex, { flexDirection: "column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Text, { w: "100%", fontSize: "16px", marginBottom: "0", fontWeight: "600", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Text, { fontSize: "12px", lineHeight: "1.2rem", fontWeight: "400", children: item.description })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react3.Divider,
            {
              border: 0,
              borderBottom: "1px solid",
              borderColor: "inherit",
              marginTop: "var(--chakra-space-1)",
              marginBottom: "var(--chakra-space-1)",
              opacity: "0.6"
            }
          )
        ] }, index)),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccountNumber, { hederaAccountId })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.DrawerCloseButton, { mt: "safe-top", fontSize: "lg" })
    ] })
  ] });
}

// src/theme/theme.ts
var import_react15 = require("@chakra-ui/react");

// src/theme/components/index.ts
var components_exports = {};
__export(components_exports, {
  Alert: () => alertTheme,
  Badge: () => badgeTheme,
  Button: () => buttonTheme,
  Checkbox: () => checkboxTheme,
  Input: () => inputTheme,
  Link: () => linkTheme,
  Modal: () => modalTheme,
  Popover: () => popoverTheme,
  Radio: () => radioTheme,
  Select: () => selectTheme,
  Textarea: () => textareaTheme
});

// src/theme/components/alert.ts
var import_anatomy = require("@chakra-ui/anatomy");
var import_react4 = require("@chakra-ui/react");
var import_theme_tools = require("@chakra-ui/theme-tools");
var { definePartsStyle, defineMultiStyleConfig } = (0, import_react4.createMultiStyleConfigHelpers)(import_anatomy.alertAnatomy.keys);
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const light = (0, import_theme_tools.getColor)(theme2, `${c}.100`, c);
  const dark = (0, import_theme_tools.transparentize)(`${c}.200`, 0.16)(theme2);
  return { light, dark };
}
var variantSubtle = definePartsStyle((props) => {
  const { colorScheme } = props;
  const bg = getBg(props);
  return {
    container: {
      bg: bg.light,
      color: `${colorScheme}.800`,
      _dark: {
        bg: bg.dark,
        color: `${colorScheme}.200`
      }
    },
    icon: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`
      }
    },
    spinner: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`
      }
    }
  };
});
var variantLeftAccent = definePartsStyle((props) => {
  const { colorScheme } = props;
  const bg = getBg(props);
  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: `${colorScheme}.500`,
      bg: bg.light,
      _dark: {
        bg: bg.dark,
        borderStartColor: `${colorScheme}.200`
      }
    },
    icon: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`
      }
    },
    spinner: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`
      }
    }
  };
});
var variantTopAccent = definePartsStyle((props) => {
  const { colorScheme } = props;
  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: `${colorScheme}.500`,
      bg: getBg(props),
      _dark: {
        borderTopColor: `${colorScheme}.200`
      }
    },
    icon: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`
      }
    },
    spinner: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`
      }
    }
  };
});
var variantSolid = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      bg: `${c}.500`,
      color: "white",
      _dark: {
        bg: `${c}.200`,
        color: "gray.900"
      }
    }
  };
});
var alertTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {
      py: 2,
      borderRadius: "md",
      fontSize: "sm",
      flexWrap: "wrap"
    },
    title: {
      lineHeight: 6,
      marginEnd: 2
    },
    description: {
      lineHeight: 5
    },
    icon: {
      marginEnd: 2
    },
    spinner: {
      marginEnd: 2
    }
  },
  variants: {
    subtle: variantSubtle,
    "left-accent": variantLeftAccent,
    "top-accent": variantTopAccent,
    solid: variantSolid
  },
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// src/theme/components/badge.ts
var import_react5 = require("@chakra-ui/react");
var badgeTheme = (0, import_react5.defineStyleConfig)({
  sizes: {
    xs: {
      fontSize: "0.6em"
    },
    sm: {
      fontSize: "0.7em"
    },
    md: {
      fontSize: "0.8em"
    },
    lg: {
      fontSize: "0.9em"
    }
  },
  defaultProps: {
    size: "md"
  }
});

// src/theme/components/button.ts
var import_react6 = require("@chakra-ui/react");
var import_theme_tools2 = require("@chakra-ui/theme-tools");
var variantPrimary = (0, import_react6.defineStyle)((props) => ({
  bg: `${props.colorScheme}.600`,
  color: "white",
  _hover: {
    // bg: `${props.colorScheme}.700`,
    color: "white",
    _disabled: {
      bg: `${props.colorScheme}.600`,
      color: "white"
    }
  },
  _active: { bg: `${props.colorScheme}.400` },
  _focusVisible: {
    ringColor: `${props.colorScheme}.500`
  },
  _dark: {
    bg: `${props.colorScheme}.300`,
    color: `${props.colorScheme}.900`,
    _hover: {
      // bg: `${props.colorScheme}.400`,
      border: `1px solid`,
      borderColor: `${props.colorScheme}.400`,
      // bg: `white`,
      color: `${props.colorScheme}.900`,
      _disabled: {
        bg: `${props.colorScheme}.300`,
        color: `${props.colorScheme}.900`
      }
    },
    _active: {
      // borderColor: `${props.colorScheme}.500`,
      // bg: 'white',
    }
  }
}));
var variantSecondary = (0, import_react6.defineStyle)((props) => ({
  bg: "white",
  color: `${props.colorScheme}.600`,
  border: "1px solid",
  borderColor: "gray.200",
  _hover: {
    bg: `${props.colorScheme}.50`,
    // color: 'white',
    borderColor: `${props.colorScheme}.200`,
    _disabled: {
      bg: "white",
      borderColor: "gray.200"
    }
  },
  _active: {
    //  bg: `${props.colorScheme}.100`,
  },
  _focusVisible: {
    ringColor: `${props.colorScheme}.500`
  },
  _dark: {
    bg: "transparent",
    color: props.colorScheme === "gray" ? "white" : `${props.colorScheme}.400`,
    borderColor: "white",
    _hover: {
      bg: "gray.900",
      borderColor: `${props.colorScheme}.700`,
      _disabled: {
        bg: "gray.800",
        borderColor: "gray.700"
      }
    },
    _active: {
      bg: "gray.800"
    }
  }
}));
var buttonTheme = (0, import_react6.defineStyleConfig)({
  baseStyle: (props) => ({
    _focusVisible: {
      boxShadow: "none",
      ring: "2px",
      ringOffset: "2px",
      ringColor: `${props.colorScheme}.500`
    },
    // Disabled Style
    ...props.isDisabled ? {
      _disabled: {
        opacity: 0.8,
        border: "1px solid!",
        bg: "blackAlpha.50!",
        borderColor: "blackAlpha.50!",
        color: "blackAlpha.300!",
        _dark: {
          opacity: 1,
          bg: "whiteAlpha.50!",
          borderColor: "whiteAlpha.50!",
          color: "whiteAlpha.300!"
        }
      }
    } : { _disabled: {} }
  }),
  variants: {
    // Custom variants
    "@primary": (props) => variantPrimary({ ...props, colorScheme: "brand" }),
    "@secondary": (props) => variantSecondary({ ...props, colorScheme: "brand" }),
    "@danger": (props) => variantSecondary({ ...props, colorScheme: "error" }),
    // Default variants
    solid: (props) => props.colorScheme === "gray" ? variantSecondary(props) : {},
    outline: variantSecondary,
    ghost: (props) => ({
      bg: (0, import_theme_tools2.transparentize)(`${props.colorScheme}.500`, 0.05)(props.theme),
      _hover: {
        bg: (0, import_theme_tools2.transparentize)(`${props.colorScheme}.500`, 0.15)(props.theme)
      }
    })
  }
});

// src/theme/components/checkbox.ts
var import_react7 = require("@chakra-ui/react");
var checkboxTheme = (0, import_react7.defineStyleConfig)({
  baseStyle: {
    container: (0, import_react7.defineStyle)({
      display: "flex",
      alignItems: "flex-start"
    }),
    control: (0, import_react7.defineStyle)({
      marginTop: 1
    })
  },
  variants: {
    "@primary": () => {
      return { colorScheme: "brand" };
    },
    "@secondary": () => {
      return { colorScheme: "brand" };
    }
  }
});

// src/theme/components/input.ts
var import_react8 = require("@chakra-ui/react");
var import_theme_tools3 = require("@chakra-ui/theme-tools");
var inputTheme = (0, import_react8.defineStyleConfig)({
  variants: {
    outline: (props) => {
      return {
        field: {
          bg: "blackAlpha.50",
          borderColor: "blackAlpha.100",
          _focusVisible: {
            borderColor: props.focusBorderColor ?? "brand.500",
            boxShadow: `0 0 0 1px ${(0, import_theme_tools3.getColor)(
              props.theme,
              props.focusBorderColor ?? "brand.500"
            )}`
          },
          "::-webkit-calendar-picker-indicator": {
            display: "none",
            opacity: 0
          },
          _dark: {
            bg: "whiteAlpha.50",
            borderColor: "whiteAlpha.700",
            _focusVisible: {
              borderColor: props.focusBorderColor ?? "brand.300",
              boxShadow: `0 0 0 1px ${(0, import_theme_tools3.getColor)(
                props.theme,
                props.focusBorderColor ?? "brand.300"
              )}`
            }
          }
        }
      };
    }
  }
});

// src/theme/components/link.ts
var import_react9 = require("@chakra-ui/react");
var linkTheme = (0, import_react9.defineStyleConfig)({
  baseStyle: {
    textDecoration: "underline",
    fontWeight: "medium",
    _hover: {
      textDecoration: "none"
    }
  }
});

// src/theme/components/modal.ts
var import_anatomy2 = require("@chakra-ui/anatomy");
var import_react10 = require("@chakra-ui/react");
var { defineMultiStyleConfig: defineMultiStyleConfig2 } = (0, import_react10.createMultiStyleConfigHelpers)(
  import_anatomy2.modalAnatomy.keys
);
function getSize(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minH: "-webkit-fill-available"
        },
        "@supports(min-height: fill-available)": {
          minH: "fill-available"
        },
        m: 0,
        borderRadius: 0
      }
    };
  }
  return {
    dialog: { maxW: value }
  };
}
var modalTheme = defineMultiStyleConfig2({
  baseStyle: {
    overlay: {
      backdropFilter: "blur(4px)"
    },
    dialog: {
      bg: "gray.700",
      mx: 4,
      py: 0,
      _dark: {
        bg: "gray.800"
      }
    },
    header: {
      px: 4,
      pt: 4,
      pb: 0
    },
    closeButton: {
      top: 2,
      insetEnd: 2
    },
    body: {
      px: 4,
      py: 4
    },
    footer: {
      px: 4,
      pt: 0,
      pb: 4
    }
  },
  sizes: {
    xs: getSize("xs"),
    sm: getSize("sm"),
    md: getSize("md"),
    lg: getSize("lg"),
    xl: getSize("xl"),
    "2xl": getSize("2xl"),
    "3xl": getSize("3xl"),
    "4xl": getSize("4xl"),
    "5xl": getSize("5xl"),
    "6xl": getSize("6xl"),
    full: getSize("full")
  },
  defaultProps: {
    size: "md"
  }
});

// src/theme/components/popover.ts
var import_anatomy3 = require("@chakra-ui/anatomy");
var import_react11 = require("@chakra-ui/react");
var import_theme_tools4 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig3 } = (0, import_react11.createMultiStyleConfigHelpers)(
  import_anatomy3.popoverAnatomy.keys
);
var $popperBg = (0, import_theme_tools4.cssVar)("popper-bg");
var popoverTheme = defineMultiStyleConfig3({
  baseStyle: {
    content: {
      [$popperBg.variable]: "colors.white",
      py: 3,
      maxW: "98vw",
      _dark: {
        [$popperBg.variable]: "colors.gray.900"
      }
    },
    header: {
      px: 3,
      pt: 0,
      pb: 0,
      borderBottomWidth: 0,
      fontWeight: "semibold"
    },
    body: {
      px: 3,
      py: 0
    },
    footer: {
      px: 3,
      pb: 0,
      pt: 3,
      borderTopWidth: 0
    },
    closeButton: {
      top: 1,
      insetEnd: 1,
      padding: 2
    }
  },
  defaultProps: {
    size: "xs"
  },
  sizes: {
    "3xs": {
      content: {
        width: "3xs"
      }
    },
    "2xs": {
      content: {
        width: "2xs"
      }
    },
    xs: {
      content: {
        width: "xs"
      }
    },
    sm: {
      content: {
        width: "sm"
      }
    },
    md: {
      content: {
        width: "md"
      }
    },
    lg: {
      content: {
        width: "lg"
      }
    },
    xl: {
      content: {
        width: "xl"
      }
    },
    "2xl": {
      content: {
        width: "2xl"
      }
    },
    "3xl": {
      content: {
        width: "3xl"
      }
    },
    "4xl": {
      content: {
        width: "4xl"
      }
    },
    "5xl": {
      content: {
        width: "5xl"
      }
    },
    "6xl": {
      content: {
        width: "6xl"
      }
    },
    "7xl": {
      content: {
        width: "7xl"
      }
    },
    "8xl": {
      content: {
        width: "8xl"
      }
    }
  }
});

// src/theme/components/radio.ts
var import_react12 = require("@chakra-ui/react");
var radioTheme = (0, import_react12.defineStyleConfig)({
  defaultProps: {
    colorScheme: "brand"
  }
});

// src/theme/components/select.ts
var import_react13 = require("@chakra-ui/react");
var import_theme_tools5 = require("@chakra-ui/theme-tools");
var selectTheme = (0, import_react13.defineStyleConfig)({
  variants: {
    outline: (props) => {
      return {
        field: {
          bg: "blackAlpha.50",
          borderColor: "blackAlpha.100",
          _focusVisible: {
            borderColor: props.focusBorderColor ?? "brand.500",
            boxShadow: `0 0 0 1px ${(0, import_theme_tools5.getColor)(
              props.theme,
              props.focusBorderColor ?? "brand.500"
            )}`
          },
          _dark: {
            bg: "whiteAlpha.50",
            borderColor: "whiteAlpha.100",
            _focusVisible: {
              borderColor: props.focusBorderColor ?? "brand.300",
              boxShadow: `0 0 0 1px ${(0, import_theme_tools5.getColor)(
                props.theme,
                props.focusBorderColor ?? "brand.300"
              )}`
            }
          }
        }
      };
    }
  }
});

// src/theme/components/textarea.ts
var import_react14 = require("@chakra-ui/react");
var import_theme_tools6 = require("@chakra-ui/theme-tools");
var textareaTheme = (0, import_react14.defineStyleConfig)({
  variants: {
    outline: (props) => {
      return {
        bg: "blackAlpha.50",
        borderColor: "blackAlpha.100",
        _focusVisible: {
          borderColor: props.focusBorderColor ?? "brand.500",
          boxShadow: `0 0 0 1px ${(0, import_theme_tools6.getColor)(
            props.theme,
            props.focusBorderColor ?? "brand.500"
          )}`
        },
        _dark: {
          bg: "whiteAlpha.50",
          borderColor: "whiteAlpha.700",
          _focusVisible: {
            borderColor: props.focusBorderColor ?? "brand.300",
            boxShadow: `0 0 0 1px ${(0, import_theme_tools6.getColor)(
              props.theme,
              props.focusBorderColor ?? "brand.300"
            )}`
          }
        }
      };
    }
  }
});

// src/theme/foundations/tailwindColors.ts
var tailwindColors = {
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  warmGray: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  trueGray: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  },
  gray: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  coolGray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  blueGray: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#6B6B6B",
    //#64748b',
    600: "#475569",
    700: "#334155",
    //#20202C
    800: "#1e293b",
    900: "#0f172a"
  },
  blinkPay: {
    50: "#ACA5FD",
    100: "#ACA5FD",
    200: "#ACA5FD",
    300: "#ACA5FD",
    400: "#ACA5FD",
    500: "#703DBA",
    600: "#703DBA",
    700: "#ACA5FD",
    800: "#2B2B3A",
    900: "#2B2B3A",
    1e3: "#000000",
    1100: "#FFFFFF",
    1200: "#334155",
    1300: "#EEE8F7"
  }
};
var tailwindColors_default = tailwindColors;

// src/theme/foundations/colors.ts
var colors = {
  brand: tailwindColors_default.blinkPay,
  gray: tailwindColors_default.blueGray,
  success: tailwindColors_default.green,
  green: tailwindColors_default.green,
  error: tailwindColors_default.rose,
  red: tailwindColors_default.rose,
  warning: tailwindColors_default.amber,
  orange: tailwindColors_default.amber,
  info: tailwindColors_default.sky,
  blue: tailwindColors_default.sky
};

// src/theme/foundations/spacing.ts
var spacing = {
  "safe-top": "env(safe-area-inset-top)",
  "safe-bottom": "env(safe-area-inset-bottom)",
  "safe-left": "env(safe-area-inset-left)",
  "safe-right": "env(safe-area-inset-right)"
};

// src/theme/foundations/layout.ts
var layout = {
  breakpoints: {
    desktop: "md"
  },
  topBar: {
    height: `calc(4rem + ${spacing["safe-top"]})`
  }
};

// src/theme/foundations/shadows.ts
var shadows = {
  layout: "0px 0px 24px 1px rgba(0, 0, 0, 0.05)"
};

// src/theme/foundations/typography.ts
var typography = {
  fonts: {
    heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  }
};

// src/theme/foundations/z-index.ts
var zIndices = {
  select: 1650,
  dayPicker: 1650
};

// src/theme/foundations/index.ts
var foundations = {
  colors,
  ...typography,
  shadows,
  space: spacing,
  layout,
  zIndices
};
var foundations_default = foundations;

// src/theme/styles.ts
var styles = {
  global: () => ({
    html: {
      bg: "gray.50",
      _dark: {
        bg: "gray.800"
      }
    },
    body: {
      overflowY: "scroll",
      WebkitTapHighlightColor: "transparent",
      bg: "gray.50",
      _dark: {
        bg: "gray.800"
      },
      display: "block",
      placeItems: "normal"
    },
    "#chakra-toast-portal > *": {
      pt: "safe-top",
      pl: "safe-left",
      pr: "safe-right",
      pb: "safe-bottom"
    }
  })
};

// src/theme/theme.ts
var theme = (0, import_react15.extendTheme)({
  styles,
  ...foundations_default,
  components: { ...components_exports }
});

// src/components/Drawer/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function DrawerComponent({ props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react16.ChakraProvider, { theme: { ...theme }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NavDrawer, { ...props }) });
}

// src/components/TopBar/index.tsx
var import_react21 = __toESM(require("react"), 1);
var import_react22 = require("@chakra-ui/react");
var import_md = require("react-icons/md");
var import_react_router_dom = require("react-router-dom");

// src/components/Icons/index.tsx
var import_react17 = require("react");
var import_react18 = require("@chakra-ui/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Icon = (0, import_react17.forwardRef)(({ icon: IconEl, iconProps, ...rest }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react18.Box,
    {
      as: "span",
      display: "inline-block",
      position: "relative",
      w: "1em",
      flex: "none",
      _before: {
        content: '"."',
        visibility: "hidden"
      },
      ref,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react18.Icon,
        {
          as: IconEl,
          w: "1em",
          h: "1em",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          ...iconProps
        }
      )
    }
  );
});

// src/assets/Logo/CaratLogo.tsx
var import_react19 = require("@chakra-ui/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var CaratLogo = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react19.chakra.svg, { width: "136px", height: "31px", viewBox: "0 0 136 31", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M17.4153 21.0665C17.0457 21.5772 16.5972 22.056 16.0693 22.505C15.5413 22.9535 14.9563 23.3451 14.3143 23.6793C13.6719 24.0136 12.9771 24.2777 12.2294 24.4711C11.4812 24.6645 10.7028 24.7612 9.89373 24.7612C8.55649 24.7612 7.33376 24.5322 6.22555 24.0752C5.11708 23.6177 4.16244 22.98 3.36217 22.1617C2.56137 21.3439 1.94097 20.3762 1.50151 19.2587C1.06153 18.1417 0.841797 16.9148 0.841797 15.577C0.841797 14.2754 1.06153 13.0569 1.50151 11.9221C1.94097 10.7871 2.56137 9.80214 3.36217 8.96627C4.16244 8.13066 5.12106 7.47094 6.23857 6.98684C7.35581 6.50328 8.59156 6.26123 9.9466 6.26123C11.5827 6.26123 13.0122 6.5604 14.2352 7.15848C15.4576 7.75683 16.4739 8.619 17.2832 9.74475L14.5649 12.3573C14.0372 11.6184 13.4126 11.0246 12.6912 10.5761C11.9696 10.1273 11.1077 9.9031 10.1049 9.9031C9.31318 9.9031 8.60058 10.0482 7.96717 10.3386C7.33376 10.6287 6.79706 11.0291 6.35733 11.5392C5.91734 12.0499 5.57885 12.6437 5.34131 13.3207C5.10379 13.9982 4.98502 14.7154 4.98502 15.4715C4.98502 16.2463 5.10378 16.9674 5.34131 17.6359C5.57885 18.3043 5.91734 18.8852 6.35733 19.3778C6.79706 19.8703 7.32472 20.2577 7.94087 20.5388C8.55648 20.8205 9.25127 20.9608 10.0258 20.9608C10.6592 20.9608 11.2089 20.8949 11.6752 20.7631C12.1412 20.6313 12.5546 20.4554 12.9155 20.2354C13.276 20.0154 13.5972 19.7603 13.8789 19.4697C14.16 19.1795 14.4331 18.8851 14.6969 18.586L17.4153 21.0665Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M24.673 6.71021H29.0803L35.5197 24.3132H31.1652L29.8192 20.2752H23.6174L22.2714 24.3132H18.1016L24.673 6.71021ZM28.8691 17.1873L26.7316 10.537L24.5409 17.1873H28.8691Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M37.4404 6.71021H43.9855C45.0055 6.71021 45.9028 6.85554 46.6773 7.14568C47.4513 7.43608 48.098 7.83196 48.6171 8.33333C49.1358 8.8347 49.5229 9.41975 49.7782 10.0882C50.033 10.7573 50.1608 11.4696 50.1608 12.226C50.1608 13.3698 49.9103 14.368 49.4089 15.2214C48.9073 16.0751 48.1989 16.7569 47.2844 17.2665L51.1901 24.3132H46.8093L43.5368 17.8473H41.3201V24.3132H37.4404L37.4404 6.71021ZM43.7743 14.6539C44.5132 14.6539 45.0938 14.4342 45.5162 13.9942C45.9384 13.5545 46.1496 13.0002 46.1496 12.3315C46.1496 11.6104 45.9384 11.0384 45.5162 10.6162C45.0938 10.194 44.5132 9.98277 43.7743 9.98277H41.3201V14.6539L43.7743 14.6539Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M58.505 6.71021H62.9123L69.3517 24.3132H64.9972L63.6512 20.2752H57.4494L56.1034 24.3132H51.9336L58.505 6.71021ZM62.7011 17.1873L60.5636 10.537L58.373 17.1873H62.7011Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M72.97 10.2203H67.2695V6.71021H82.6553V10.2203H76.9814V24.3132H72.97V10.2203Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M85.7641 19.0629C85.9923 19.3095 86.2606 19.5598 86.5689 19.8149C86.8765 20.0699 87.2198 20.3032 87.5982 20.5142C87.9765 20.7251 88.3897 20.8968 88.8381 21.0291C89.2872 21.1609 89.766 21.2268 90.2766 21.2268C90.5758 21.2268 90.8744 21.1832 91.1736 21.095C91.4728 21.0068 91.7454 20.8798 91.9919 20.7124C92.238 20.545 92.4362 20.3425 92.586 20.105C92.7348 19.8675 92.8103 19.5997 92.8103 19.3005C92.8103 18.6495 92.4936 18.1437 91.8602 17.7828C91.2267 17.4226 90.224 17.066 88.8514 16.7142C88.1827 16.5559 87.5626 16.3274 86.9913 16.0277C86.419 15.7288 85.9264 15.3679 85.5132 14.9458C85.0996 14.5233 84.7783 14.0397 84.5501 13.4943C84.3211 12.9491 84.2068 12.342 84.2068 11.6732C84.2068 10.9343 84.3389 10.2395 84.6027 9.5883C84.8668 8.93762 85.2667 8.36106 85.8037 7.8597C86.3398 7.35833 87.0083 6.96245 87.8091 6.67204C88.6096 6.38191 89.555 6.23657 90.6459 6.23657C91.5434 6.23657 92.3352 6.32903 93.0212 6.51369C93.7073 6.69861 94.2923 6.91861 94.7764 7.17341C95.26 7.42874 95.6559 7.69257 95.9635 7.96518C96.2712 8.23831 96.505 8.45352 96.6634 8.61188L94.3672 11.1453C94.1733 10.9869 93.949 10.8155 93.694 10.6306C93.4389 10.446 93.153 10.2746 92.8363 10.1162C92.5196 9.95789 92.1721 9.82584 91.7943 9.72036C91.4154 9.61461 91.0152 9.562 90.5933 9.562C90.3117 9.562 90.0343 9.6061 89.7617 9.69379C89.4891 9.782 89.2425 9.90076 89.0231 10.0501C88.8025 10.1999 88.6272 10.3758 88.4954 10.578C88.3631 10.7805 88.2972 10.9962 88.2972 11.2244C88.2972 11.8228 88.6139 12.3066 89.2473 12.6759C89.8807 13.0455 90.7517 13.3535 91.8602 13.5998C92.5106 13.7581 93.1488 13.9736 93.7731 14.2462C94.3975 14.5193 94.9565 14.8756 95.4491 15.3151C95.9417 15.7551 96.3376 16.296 96.6368 16.9385C96.936 17.5809 97.0853 18.3594 97.0853 19.2739C97.0853 20.0657 96.9094 20.7958 96.5576 21.4643C96.2053 22.1333 95.7265 22.7136 95.1192 23.2062C94.5123 23.6988 93.7997 24.0814 92.9814 24.354C92.1636 24.6266 91.2793 24.7632 90.3292 24.7632C89.4492 24.7632 88.649 24.6797 87.9281 24.5123C87.2065 24.345 86.5556 24.1255 85.975 23.8529C85.3945 23.5803 84.8708 23.2678 84.4048 22.9161C83.9385 22.5643 83.5381 22.2035 83.2041 21.8336L85.7641 19.0629Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M118.137 24.8863L108.751 15.4999L118.137 6.1135L127.524 15.4999L118.137 24.8863ZM113.078 15.4999L118.137 20.5595L123.197 15.4999L118.137 10.4403L113.078 15.4999ZM118.137 24.8863L108.751 15.4999L118.137 6.1135L127.524 15.4999L118.137 24.8863ZM113.078 15.4999L118.137 20.5595L123.197 15.4999L118.137 10.4403L113.078 15.4999ZM133.295 15.4999C133.295 23.8714 126.509 30.6578 118.137 30.6578C109.766 30.6578 102.979 23.8714 102.979 15.4999C102.979 7.12846 109.766 0.342041 118.137 0.342041C126.509 0.342041 133.295 7.12846 133.295 15.4999ZM118.137 3.63293C111.583 3.63293 106.27 8.94597 106.27 15.4999C106.27 22.0539 111.583 27.3669 118.137 27.3669C124.691 27.3669 130.004 22.0539 130.004 15.4999C130.004 8.94597 124.691 3.63293 118.137 3.63293Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M132.772 1.28351H133.571C133.702 1.28351 133.812 1.30358 133.899 1.34373C133.991 1.38022 134.065 1.42766 134.124 1.48604C134.182 1.54078 134.224 1.60281 134.25 1.67215C134.275 1.74148 134.288 1.80534 134.288 1.86373C134.288 1.96955 134.259 2.07173 134.2 2.17025C134.146 2.26878 134.065 2.34541 133.96 2.40015L134.414 3.18288H133.866L133.467 2.48225H133.259V3.18288H132.772V1.28351ZM133.554 2.09362C133.646 2.09362 133.708 2.07537 133.741 2.03888C133.777 2.00239 133.795 1.95495 133.795 1.89657C133.795 1.76155 133.715 1.69404 133.554 1.69404H133.259V2.09362H133.554ZM133.505 4.16267C133.239 4.16267 132.991 4.11341 132.761 4.01488C132.531 3.91636 132.33 3.78134 132.159 3.60983C131.991 3.43467 131.858 3.23215 131.759 3.00225C131.661 2.76871 131.611 2.51874 131.611 2.25236C131.611 1.98597 131.661 1.73783 131.759 1.50794C131.858 1.27439 131.991 1.07187 132.159 0.900357C132.33 0.728848 132.531 0.59383 132.761 0.495304C132.994 0.393129 133.244 0.342041 133.511 0.342041C133.777 0.342041 134.025 0.393129 134.255 0.495304C134.485 0.59383 134.684 0.728848 134.852 0.900357C135.023 1.07187 135.158 1.27439 135.257 1.50794C135.355 1.73783 135.405 1.98597 135.405 2.25236C135.405 2.51874 135.355 2.76871 135.257 3.00225C135.158 3.23215 135.023 3.43467 134.852 3.60983C134.68 3.78134 134.48 3.91636 134.25 4.01488C134.02 4.11341 133.772 4.16267 133.505 4.16267ZM133.505 3.70836C133.706 3.70836 133.892 3.67187 134.064 3.59888C134.235 3.52225 134.383 3.42008 134.507 3.29236C134.635 3.16099 134.733 3.00773 134.802 2.83257C134.875 2.65376 134.912 2.46036 134.912 2.25236C134.912 2.04801 134.875 1.85825 134.802 1.68309C134.733 1.50429 134.635 1.3492 134.507 1.21783C134.383 1.08646 134.235 0.984287 134.064 0.911304C133.892 0.834673 133.708 0.796357 133.511 0.796357C133.31 0.796357 133.124 0.834673 132.952 0.911304C132.781 0.984287 132.631 1.08646 132.504 1.21783C132.379 1.3492 132.281 1.50429 132.208 1.68309C132.135 1.85825 132.098 2.04801 132.098 2.25236C132.098 2.46036 132.133 2.65376 132.202 2.83257C132.275 3.00773 132.374 3.16099 132.498 3.29236C132.626 3.42008 132.775 3.52225 132.947 3.59888C133.118 3.67187 133.305 3.70836 133.505 3.70836Z" })
  ] });
};

// src/assets/Logo/IconHamburger.tsx
var import_react20 = require("@chakra-ui/react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconHamburger = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react20.chakra.svg, { width: "29", height: "29", viewBox: "0 0 29 29", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        y: "14.1421",
        width: "4",
        height: "4",
        transform: "rotate(-45 0 14.1421)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "5.65723",
        y: "8.48523",
        width: "4",
        height: "4",
        transform: "rotate(-45 5.65723 8.48523)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "11.3135",
        y: "2.82837",
        width: "4",
        height: "4",
        transform: "rotate(-45 11.3135 2.82837)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "5.65723",
        y: "19.799",
        width: "4",
        height: "4",
        transform: "rotate(-45 5.65723 19.799)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "11.3135",
        y: "14.1421",
        width: "4",
        height: "4",
        transform: "rotate(-45 11.3135 14.1421)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "16.9707",
        y: "8.48523",
        width: "4",
        height: "4",
        transform: "rotate(-45 16.9707 8.48523)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "11.3135",
        y: "25.4558",
        width: "4",
        height: "4",
        transform: "rotate(-45 11.3135 25.4558)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "16.9707",
        y: "19.799",
        width: "4",
        height: "4",
        transform: "rotate(-45 16.9707 19.799)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        x: "22.627",
        y: "14.1421",
        width: "4",
        height: "4",
        transform: "rotate(-45 22.627 14.1421)",
        fill: "white"
      }
    )
  ] });
};
var IconHamburger_default = IconHamburger;

// src/components/TopBar/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var MenuButton = import_react21.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_react22.IconButton,
    {
      ref,
      "aria-label": "Navigation",
      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { icon: IconHamburger_default, fontSize: "2xl", stroke: "black", _dark: { stroke: "white" } }),
      variant: "unstyled",
      _active: { bg: "gray.100" },
      _hover: { bg: "gray.200" },
      _dark: { _hover: { bg: "whiteAlpha.200" } },
      ...props
    }
  );
});
var menuList = [
  {
    title: "Profile",
    description: "Update name, email or default location, delete account",
    menuItemProps: {
      to: "/profile",
      as: import_react_router_dom.Link
    }
  },
  {
    title: "Transactions",
    description: "View a history of payments sent and received",
    menuItemProps: {
      to: "/transactions",
      as: import_react_router_dom.Link
    }
  },
  {
    title: "Purchase",
    description: "View a history of purchase transactions",
    menuItemProps: {
      to: "/purchase",
      as: import_react_router_dom.Link
    }
  },
  {
    title: "Escrow",
    description: "View and create an escrow account",
    menuItemProps: {
      to: "/escrow",
      as: import_react_router_dom.Link
    }
  },
  {
    title: "Security",
    description: "Backup or restore wallet, security PIN",
    menuItemProps: {
      to: "/security",
      as: import_react_router_dom.Link
    }
  },
  {
    title: "Logout",
    description: "",
    menuItemProps: {
      onClick: () => console.log("Logged out succesfully")
    }
  }
];
function TopBar() {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const headerLogo = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CaratLogo, { fontSize: "150px", fill: "brand.600", _dark: { fill: "white" } });
  const btnRef = (0, import_react21.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react21.useState)(false);
  const showTopNav = !pathname || ["/", "/dashboard"].includes(pathname);
  const showBackIcon = pathname && ["/transactions", "/escrow", "/settings", "/security", "/bitcarbon"].includes(pathname);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react22.SlideFade, { in: true, offsetY: -40, style: { zIndex: 5 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_react22.Flex,
      {
        position: "fixed",
        top: "0",
        insetStart: "0",
        insetEnd: "0",
        maxW: "80ch",
        m: "auto",
        align: "center",
        pt: "safe-top",
        px: "5",
        h: "64px",
        bg: "gray.50",
        color: "gray.800",
        justifyContent: "space-between",
        _dark: {
          bg: "gray.800",
          color: "gray.50"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react22.Box, { as: import_react_router_dom.Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CaratLogo, { fontSize: "150px", fill: "brand.600", _dark: { fill: "white" } }) }),
          showTopNav ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            MenuButton,
            {
              ref: btnRef,
              display: { base: "flex" },
              mr: "-0.5rem",
              borderRadius: "full",
              _focusVisible: { shadow: "outline" },
              onClick: handleOpen
            }
          ) : showBackIcon ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_react22.Button,
            {
              as: import_react_router_dom.Link,
              to: "/",
              fontSize: "lg",
              pr: "0",
              "aria-label": "back button",
              leftIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_md.MdArrowBack, { fontSize: "xl", height: "100px" }),
              background: "bottom",
              border: "none",
              children: "Back"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react22.CloseButton, { size: "lg", as: import_react_router_dom.Link, to: "/" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react22.Box, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      NavDrawer,
      {
        menuList,
        HeaderLogo: headerLogo,
        btnRef,
        isOpen,
        handleClose,
        onClose: handleClose,
        hederaAccountId: "0.0.5101947"
      }
    )
  ] });
}
function TopBarComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react22.ChakraProvider, { theme: { ...theme }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TopBar, {}) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SidebarDrawer,
  TopBar,
  chakraTheme
});

import { defineConfig, createSystem, defaultConfig } from '@chakra-ui/react';

import foundations from './foundations';
import { globalStyles } from './styles';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        },
        body: {
          value: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        },
        mono: { value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace` },
      },
      colors: foundations.colors,
    },
  },
  globalCss: { ...globalStyles },
});

console.log(config);

export const system = createSystem(defaultConfig, config);

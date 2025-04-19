// import type { StorybookConfig } from '@storybook/react-vite';

// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@chromatic-com/storybook",
//     "@storybook/experimental-addon-test"
//   ],
//   "framework": {
//     "name": "@storybook/react-vite",
//     "options": {}
//   }
// };
// export default config;

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  stories: ["../src/**/*.stories.tsx"],
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: path.resolve(__dirname, "../tsconfig.stories.json"),
    },
  },
};

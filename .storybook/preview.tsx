import * as React from 'react';
import type { Preview } from '@storybook/react';

import '../src/styles.css';
import { ChalkDefs } from '../src/ChalkDefs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#FAF7F1' },
        { name: 'raised', value: '#FFFDF8' },
        { name: 'sunken', value: '#F1ECE2' },
        { name: 'ink', value: '#131317' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Chalk border', 'Shadows'],
          'Components',
          ['Button', 'Card', 'Input', 'Badge', 'Tabs'],
          'Patterns',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ChalkDefs />
        <Story />
      </>
    ),
  ],
};

export default preview;

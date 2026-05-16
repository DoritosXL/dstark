import * as React from 'react';
import type { Preview, Decorator } from '@storybook/react';

import '../src/styles.css';
import { ChalkDefs } from '../src/ChalkDefs';

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme ?? 'light') as string;

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ChalkDefs />
      <Story />
    </>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Color scheme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun',  title: 'Light — warm paper' },
          { value: 'dark',  icon: 'moon', title: 'Dark — chalkboard' },
        ],
        dynamicTitle: true,
      },
    },
  },
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
        { name: 'paper',      value: '#FAF7F1' },
        { name: 'raised',     value: '#FFFDF8' },
        { name: 'sunken',     value: '#F1ECE2' },
        { name: 'chalkboard', value: '#1B2421' },
        { name: 'ink',        value: '#131317' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Chalk border', 'Shadows', 'Color Scheme'],
          'Components',
          ['Button', 'Card', 'Input', 'Badge', 'Tabs'],
          'Patterns',
        ],
      },
    },
  },
  decorators: [withTheme],
};

export default preview;

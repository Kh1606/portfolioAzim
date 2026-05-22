import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Azimjon Khusanboev Components',
    brandUrl: 'https://aaa-5uh.pages.dev',
  },
});
